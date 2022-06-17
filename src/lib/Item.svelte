<script lang="ts">
    import { menu, equipment } from "$lib/store";
    import { baseUrl } from "./source";
    
    export let source: any = undefined;
    export let slot: string = ''
    export let label: string = 'Item';

    function open(): void { menu.set({source, slot, label}); }
</script>

{#if equipment}
<div
    class="cell cell-hover aspect-square flex justify-center items-center"
    on:click={open}
>
    {#if $equipment[slot]}
    <img src="{baseUrl}/{$equipment[slot].path}" class="w-full" title={$equipment[slot].name} alt={$equipment[slot].name}>
    {:else}
    <p class="md:text-xs lg:text-base opacity-50">{label}</p>
    {/if}
</div>
{/if}