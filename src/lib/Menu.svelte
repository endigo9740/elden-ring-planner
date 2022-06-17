<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import { menu, equipment } from "./store";
    import { baseUrl } from './source';

    let searchTerm: string = '';

    function formatHeading(v: string): string {
        return v.replaceAll('_', ' ');
    }

    function isActive(item: any): boolean {
        if (!$equipment[$menu.slot]) return false;
        return item.path === $equipment[$menu.slot].path;
    }

    function onSelect(v: any): void {
        const equipmentArrCopy = $equipment;
        equipmentArrCopy[$menu.slot] = v;
        equipment.set(equipmentArrCopy);
        close();
    }

    function remove(): void {
        onSelect(null);
    }

    function close(): void {
        menu.set(undefined);
    }

    // Reactive
    $: itemsFiltered = (catList: any): any[] => {
        let castListArr: any[] = Array.from(catList);
        // Filter by search
        castListArr = castListArr.filter((item: any) => {
            return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
        });
        // Return
        return castListArr;
    }
</script>

{#if $menu}
<div class="fixed z-50 w-full h-full flex bg-gold-md/50" transition:fade|self={{duration: 100}}>

    <!-- Shim -->
    <div class="flex-auto" on:click={close}></div>

    <!-- Panel -->
    <div class="bg-gold-bg w-[90%] md:w-[75%] lg:w-[40%] flex flex-col" transition:fly|self={{x: 400, duration: 200}}>
        
        <!-- Header -->
        <header class="flex-none flex justify-between p-4">
            <h2 class="capitalize">{$menu.label}</h2>
            <div class="flex items-center space-x-4">
                <button type="button" on:click={remove}>Remove</button>
                <button type="button" on:click={close} class="px-4">Close &#10005;</button>
            </div>
        </header>

        <hr>

        <!-- Search -->
        <section class="p-4">
            <input type="search" bind:value={searchTerm} placeholder="Search...">
        </section>

        <hr>

        <!-- Item Selection -->
        <section class="p-4 flex-auto space-y-4 overflow-y-auto">
            {#each Object.entries($menu.source) as [catName, catList]}
                <!-- If Search Results -->
                {#if itemsFiltered(catList).length}
                    <!-- Subtitle -->
                    {#if catName !== '_'}<h3 class="capitalize">{formatHeading(catName)}</h3>{/if}
                    <!-- List -->
                    <nav class="list-none grid grid-cols-3 gap-4">
                        {#each itemsFiltered(catList) as item}
                            <li
                                class="border border-gold-md bg-gold-md/20 p-2 rounded-xl hover:bg-gold-lt cursor-pointer"
                                class:bg-gold-md={isActive(item)}
                                class:opacity-30={item.unavailable === true}
                                on:click={()=>{onSelect(item)}}
                            >
                                <img class="w-full aspect-square" src="{baseUrl}/{item.path}" title={item.name} alt={item.name} loading="lazy">
                                <p class="text-[10px] lg:text-xs text-center text-ellipsis overflow-hidden mt-3">
                                    {@html item.name ? item.name : '...'}
                                </p>
                            </li>
                        {/each}
                    </nav>
                {/if}
            {/each}
        </section>

    </div>
</div>
{/if}
