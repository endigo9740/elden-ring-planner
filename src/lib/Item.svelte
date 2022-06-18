<script lang="ts">
    import { menu, equipment } from "$lib/store";
    import { baseUrl } from "./source";
    
    export let source: any = undefined;
    export let slot: string = ''
    export let label: string = 'Item';

    function open(): void { menu.set({source, slot, label}); }
    function wiki(): void { if(e.button != 1) return; e.preventDefault(); e.stopPropagation(); window.open("https://eldenring.wiki.fextralife.com/" + e.target.querySelector('.w-full').title.replace(' ', '+')); }
</script>

{#if equipment}
<div
    class="cell cell-hover aspect-square flex justify-center items-center"
    on:click={open}
    on:auxclick={wiki}
>
    {#if $equipment[slot]}
    <img src="{baseUrl}/{$equipment[slot].path}" class="w-full" title={$equipment[slot].name} alt={$equipment[slot].name}>
    {:else}
    <p class="md:text-xs lg:text-base opacity-50">{label}</p>
    {/if}
</div>
{/if}
