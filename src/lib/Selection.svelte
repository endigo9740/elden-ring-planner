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
        // Sort alphabetically by name (NOTE: keep manual sort?)
        // castListArr = castListArr.sort((a, b) => a.name < b.name ? -1 : 1);
        // Return
        return castListArr;
    }
</script>

{#if $menu}
<div class="fixed z-50 w-full h-full flex bg-gold-md/50" transition:fade|self={{duration: 100}}>

    <!-- Shim -->
    <div class="flex-auto" on:click={close}></div>

    <!-- Panel -->
    <div class="bg-gold-bg w-[90%] md:w-[75%] lg:w-[50%] flex flex-col" transition:fly|self={{x: 400, duration: 200}}>
        
        <!-- Header -->
        <header class="flex-none flex justify-between p-4">
            <h2 class="capitalize">{$menu.label}</h2>
            <div class="flex items-center space-x-4">
                <button type="button" on:click={remove}>Remove</button>
                <button type="button" on:click={close} class="px-4">&#10005;</button>
            </div>
        </header>

        <hr>

        <!-- Search -->
        <section class="p-4">
            <input type="search" class="border border-gold-md focus:border-gold-lt/50 bg-gold-md/50 text-white placeholder:text-white/50 px-3 py-2 w-full outline-none rounded-lg" bind:value={searchTerm} placeholder="Search...">
        </section>

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
                            class="border border-gold-md bg-gold-md/20 p-2 rounded-xl hover:bg-gold-lt cursor-pointer"
                            class:bg-gold-md={isActive(item)}
                            on:click={()=>{onSelect(item)}}
                        >
                            <img class="w-full aspect-square" src="{baseUrl}/{item.path}" title={item.name} alt={item.name} loading="lazy">
                            <p class="text-[10px] lg:text-xs text-white/50 text-center text-ellipsis overflow-hidden mt-2">{item.name}</p>
                        </li>
                    {/each}
                </nav>
            {/each}
        </section>

    </div>
</div>
{/if}
