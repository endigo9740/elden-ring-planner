<script lang="ts">
    import { Button, Card } from '@brainandbones/skeleton';
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
        onClose();
    }

    function onUnequip(): void {
        onSelect(null);
    }

    function onRandomize(): void {
        const randCat = randomFromArray(Object.entries($menu.source));
        const randItem = randomFromArray(randCat[1]);
        onSelect(randItem);
    }

    function onClose(): void {
        menu.set(undefined);
    }

    // Utility ---

    function randomFromArray(arr: any[]): any {
        const r = arr.sort(() => 0.5 - Math.random());
        return r.slice(0,1)[0];
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
<div class="fixed z-50 w-full h-full flex bg-black/10 dar:bg-black/50" transition:fade|self={{duration: 100}}>

    <!-- Shim -->
    <div class="flex-auto" on:click={onClose}></div>

    <!-- Panel -->
    <div class="bg-surface-50 dark:bg-surface-900 w-[90%] md:w-[75%] lg:w-[40%] flex flex-col" transition:fly|self={{x: 400, duration: 200}}>
        
        <!-- Header -->
        <header class="p-4 space-y-4">
            
            <div class="flex justify-between items-center">
                <h2>{$menu.label}</h2>
                <Button variant="filled-primary" type="button" on:click={onClose}>&#10005;</Button>
            </div>
            
            <!-- Filters -->
            <section class="flex flex-col md:flex-row md:space-x-4 md:space-y-0">

                <!-- Category -->
                {#if Object.entries($menu.source).length > 1}
                <label class="flex-1">
                    <!-- <span>Category</span> -->
                    <select class="flex-[40%] list-none grid grid-cols-3 gap-4" bind:value={categoryTerm}>
                        <option value="">- None -</option>
                        {#each Object.entries($menu.source) as [catName, catList]}
                        <option value={catName} class="border border-accent-500 bg-accent-500/20 p-2 rounded-xl hover:bg-primary-500 cursor-pointer">
                            {formatHeading(catName)}
                        </option>
                        {/each}
                    </select>
                </label>
                {/if}

                <!-- Search -->
                <label class="flex-1">
                    <!-- <span>Search</span> -->
                    <input class="flex-[60%]" type="search" bind:value={searchTerm} placeholder="Search...">
                </label>

                <!-- Clear -->
                {#if searchTerm || categoryTerm}
                <Button variant="ghost-accent" type="button" class="flex-none" on:click={clearFilters} disabled={!searchTerm && !categoryTerm}>&#10005;</Button>
                {/if}

            </section>

            <!-- Options -->
            <Card class="flex justify-center items-center space-x-4 space-y-0">
                <Button variant="ghost-accent" width="w-full" type="button" on:click={onUnequip}>Unequip</Button>
                <Button variant="ghost-accent" width="w-full" type="button" on:click={onRandomize}>Randomize</Button>
            </Card>

        </header>

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
                                class="cell"
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
    .active { @apply !bg-primary-500; }
</style>
