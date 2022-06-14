<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import { menu, equipment } from "./store";
    import { baseUrl, source } from './source';

    function formatHeading(v: string): string {
        return v.replace('_', ' ');
    }

    function isActive(item: any): boolean {
        if (!$equipment[$menu.slot]) return false;
        return item.file === $equipment[$menu.slot].file
    }

    function castArray(arrayLike: any): any[] {
        return Array.from(arrayLike);
    }

    function onSelect(v: any): void {
        const equipmentArrCopy = $equipment;
        equipmentArrCopy[$menu.slot] = v;
        equipment.set(equipmentArrCopy);
        close();
    }

    function remove(): void {
        onSelect(undefined);
    }

    function close(): void {
        menu.set(undefined);
    }
</script>

{#if $menu}
<div class="bg-black/70 fixed z-50 w-full h-full flex justify-center items-center p-4" transition:fade={{duration: 100}}>

    <!-- Panel -->
    <div class="fixed top-0 right-0 bottom-0 w-[90%] md:w-[75%] lg:w-[50%] flex flex-col bg-neutral-800" transition:fly={{x: 400, duration: 200}}>

        <!-- Header -->
        <header class="bg-neutral-900 flex-none flex justify-between p-4">
            <h2 class="capitalize">{formatHeading($menu.category)}</h2>
            <div class="flex items-center space-x-4">
                <button type="button" on:click={remove}>Remove</button>
                <button type="button" on:click={close} class="px-4">&#10005;</button>
            </div>
        </header>

        <!-- List -->
        <section class="p-4 overflow-y-auto">
            {#if source[$menu.category]}

                <!-- Array - Flat List -->
                {#if Array.isArray(source[$menu.category]) }

                    <nav class="list-none rounded-xl grid grid-cols-4 gap-4">
                        {#each source[$menu.category] as item}
                        <li
                            class="bg-black/20 p-1 rounded-xl hover:bg-neutral-700 cursor-pointer"
                            class:active={isActive(item)}
                            on:click={()=>{onSelect(item)}}
                        >
                            <img src="{baseUrl}/{item.path}/{item.file}" title={item.label} alt={item.label} loading=lazy>
                        </li>
                        {/each}
                    </nav>

                <!-- Object - Sectioned List -->
                {:else}

                    <div class="flex-auto space-y-4">

                        {#each Object.entries(source[$menu.category]) as [catName, catList]}
                        <h3 class="capitalize">{formatHeading(catName)}</h3>
                        <nav class="list-none bg-black/10 p-4 rounded-xl grid grid-cols-4 gap-4">
                            {#each castArray(catList) as item}
                            <li
                                class="bg-black/20 p-1 rounded-xl hover:bg-neutral-700 cursor-pointer"
                                class:active={isActive(item)}
                                on:click={()=>{onSelect(item)}}
                            >
                                <img src="{baseUrl}/{item.path}/{item.file}" title={item.label} alt={item.label} loading=lazy>
                            </li>
                            {/each}
                        </nav>
                        {/each}
                    </div>

                {/if}

            {:else}
            <p class="bg-black/20 p-4 text-center">No sources for <strong>{$menu.category}</strong>.</p>
            {/if}
        </section>

    </div>
</div>
{/if}

<style lang="postcss">
    .active { @apply !bg-white/50 text-black; }
</style>