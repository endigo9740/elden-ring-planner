<script lang="ts">
    import { menu, equipment } from "$lib/store";
    import { baseUrl } from "./source";
    
    export let source: any = undefined;
    export let slot: string = ''
    export let label: string = 'Item';

    function onOpen(): void { menu.set({source, slot, label}); }
</script>

{#if equipment}
<div
    class="flex justify-center items-center border border-gold-md bg-gold-md/20 aspect-square w-full rounded-xl p1 md:p-4 hover:bg-gold-lt cursor-pointer {$$props.class}"
    on:click={onOpen}
>
    {#if source && $equipment[slot]}
    <img src="{baseUrl}/{$equipment[slot].path}" class="w-full" title={$equipment[slot].name} alt={$equipment[slot].name}>
    {:else}
    <p class="md:text-xs lg:text-base opacity-50">{label}</p>
    {/if}
</div>
{/if}