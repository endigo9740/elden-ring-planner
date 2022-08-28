<script lang="ts">
    import { menu, equipment } from "$lib/store";
    import { baseUrl } from "./source";
    
    export let source: any = undefined;
    export let slot: string = ''
    export let label: string = 'Item';

    function open(): void { menu.set({source, slot, label}); }
</script>

{#if equipment}
<div class="cell" on:click={open} >
    {#if $equipment[slot]}
    <img src="{baseUrl}/{$equipment[slot].path}" class="w-full" title={$equipment[slot].name} alt={$equipment[slot].name}>
    {:else}
    <p class="font-bold">{label}</p>
    {/if}
</div>
{/if}