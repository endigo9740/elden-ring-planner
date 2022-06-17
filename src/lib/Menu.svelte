<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    import { menu, equipment } from "./store";
    import { baseUrl } from './source';

    // Filters ---
    
    let categoryTerm: string = '';
    let searchTerm: string = '';

    // Functionality ---

    function clearFilters(): void {
        categoryTerm = '';
        searchTerm = '';
    }

    function formatHeading(v: string): string {
        return v.replaceAll('_', ' ');
    }

    function isActive(item: any): boolean {
        const slot = $equipment[$menu.slot];
        if (!slot) return false;
        return item.path === slot.path;
    }

    function onSelect(v: any): void {
        const equipmentArrCopy = $equipment;
        equipmentArrCopy[$menu.slot] = v;
        equipment.set(equipmentArrCopy);
        close();
    }

    function unequip(): void {
        onSelect(null);
    }

    function close(): void {
        menu.set(undefined);
    }
    
    // Reactive ---
    
    // Clear category term on menu change
    menu.subscribe(v => {
        categoryTerm = ''; // clear
    });

    // Filtered items based on current conditions
    $: itemsFiltered = (catList: any): any[] => {
        let castListArr: any[] = Array.from(catList);
        // Filter by Category Term
        castListArr = castListArr.filter((item: any) => {
            if (!categoryTerm) return item;
            return item.path.includes(`/${categoryTerm}/`);
        });
        // Filter by Search Term
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
    <div class="gradient-background w-[90%] md:w-[75%] lg:w-[40%] flex flex-col" transition:fly|self={{x: 400, duration: 200}}>
        
        <!-- Header -->
        <header class="flex-none flex justify-between p-4">
            <h2 class="capitalize">{$menu.label}</h2>
            <div class="flex items-center space-x-4">
                <button type="button" on:click={unequip}>Unequip</button>
                <button type="button" on:click={close} class="px-4">Close &#10005;</button>
            </div>
        </header>

        <!-- Filters -->
        <section class="shadow-xl p-4 pt-0 flex items-end space-x-4">

            <!-- Category -->
            {#if Object.entries($menu.source).length > 1}
            <label>
                <span>Category</span>
                <select class="flex-[40%] list-none grid grid-cols-3 gap-4" bind:value={categoryTerm}>
                    <option value="">- None -</option>
                    {#each Object.entries($menu.source) as [catName, catList]}
                    <option value={catName} class="border border-gold-md bg-gold-md/20 p-2 rounded-xl hover:bg-gold-lt cursor-pointer">
                        {formatHeading(catName)}
                    </option>
                    {/each}
                </select>
            </label>
            {/if}

            <!-- Search -->
            <label>
                <span>Search</span>
                <input class="flex-[60%]" type="search" bind:value={searchTerm} placeholder="Search...">
            </label>

            <!-- Clear -->
            <button type="button" on:click={clearFilters} disabled={!searchTerm && !categoryTerm}>Clear</button>

        </section>

        <!-- Item Selection -->
        <section class="p-4 flex-auto space-y-4 overflow-y-auto">
            <!-- Per Each Category -->
            {#each Object.entries($menu.source) as [catName, catList]}
                {#if itemsFiltered(catList).length}
                    <!-- Category Name -->
                    {#if catName !== '_'}<h3 class="capitalize">{formatHeading(catName)}</h3>{/if}
                    <!-- Category List -->
                    <nav class="list-none grid grid-cols-3 gap-4">
                        {#each itemsFiltered(catList) as item}
                            <li
                                class="cell cell-hover"
                                class:active={isActive(item)}
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

<style lang="postcss">
    .active { @apply !bg-gold-lt; }
</style>
