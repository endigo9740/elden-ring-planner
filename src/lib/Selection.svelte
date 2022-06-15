<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import { menu, equipment } from "./store";
    import { baseUrl } from './source';

    let searchTerm: string = '';

    function formatHeading(v: string): string {
        return v.replace('_', ' ');
    }

    function isActive(item: any): boolean {
        if (!$equipment[$menu.slot]) return false;
        return item.file === $equipment[$menu.slot].file
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

    // Reactive
    $: itemsFiltered = (catList: any): any[] => {
        let castListArr: any[] = Array.from(catList);
        // Filter by search
        castListArr = castListArr.filter((item: any) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        // Sort alphabetically by name
        // castListArr = castListArr.sort((a, b) => a.name < b.name ? -1 : 1);
        // Return
        return castListArr;
    }
</script>

{#if $menu}
<div class="fixed z-50 w-full h-full flex bg-black/70" transition:fade|self={{duration: 100}}>

    <!-- Shim -->
    <div class="flex-auto" on:click={close}></div>

    <!-- Panel -->
    <div class="w-[90%] md:w-[75%] lg:w-[50%] flex flex-col bg-neutral-800" transition:fly|self={{x: 400, duration: 200}}>
        
        <!-- Header -->
        <header class="flex-none flex justify-between p-4">
            <h2 class="capitalize">{$menu.label}</h2>
            <div class="flex items-center space-x-4">
                <button type="button" on:click={remove}>Remove</button>
                <button type="button" on:click={close} class="px-4">&#10005;</button>
            </div>
        </header>

        <!-- Search -->
        <input type="search" class="bg-neutral-700 text-white p-4 w-full" bind:value={searchTerm} placeholder="Search...">

        <hr>

        <!-- Item Selection -->
        <section class="p-4 flex-auto space-y-4 overflow-y-auto">
            {#each Object.entries($menu.source) as [catName, catList]}
                <!-- Subtitle -->
                {#if catName !== '_'}<h3 class="capitalize">{formatHeading(catName)}</h3>{/if}
                <!-- List -->
                <nav class="list-none grid grid-cols-4 gap-4">
                    {#each itemsFiltered(catList) as item}
                        <li
                            class="bg-black/20 p-2 rounded-xl hover:bg-neutral-700 cursor-pointer"
                            class:active={isActive(item)}
                            on:click={()=>{onSelect(item)}}
                        >
                            <img class="w-full aspect-square" src="{baseUrl}/{item.path}/{item.file}" title={item.name} alt={item.name} loading="lazy">
                        </li>
                    {/each}
                </nav>
            {/each}
        </section>

    </div>
</div>
{/if}

<style lang="postcss">
    .active { @apply !bg-neutral-200/50 text-black; }
</style>