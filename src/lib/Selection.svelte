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

    function close(): void {
        menu.set(undefined);
    }
</script>

{#if $menu}
<div class="bg-black/70 fixed z-50 w-full h-full flex justify-center items-center p-4" transition:fade={{duration: 100}}>

    <!-- Modal -->
    <div class="bg-neutral-800 w-full max-w-[640px] p-4 rounded-xl space-y-4" transition:fly={{y: 100, duration: 100}}>

        <h2 class="capitalize">{formatHeading($menu.category)}</h2>

        <!-- List -->
        {#if source[$menu.category]}
       

            <!-- Array - Flat List -->
            {#if Array.isArray(source[$menu.category]) }

                <nav class="list-none bg-black/10 p-4 rounded-xl grid grid-cols-4 gap-4 max-h-[800px] overflow-y-auto">
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

                <div class="max-h-[800px] overflow-y-auto space-y-4">

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

        <!-- Actions -->
        <div class="flex justify-end space-x-4">
            <button type="button" on:click={close}>Cancel</button>
        </div>
    
    </div>
</div>
{/if}

<style lang="postcss">
    .active { @apply !bg-white/50 text-black; }
</style>