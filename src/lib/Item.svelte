<script lang="ts">
    import { menu, equipment } from "$lib/store";
    import { baseUrl } from "./source";

    export let category: string = '';
    export let slot: string = ''
    export let placeholder: string = 'Item';

    function onOpen(): void { menu.set({category, slot}); }
</script>

{#if equipment}
<div
    class="flex justify-center items-center bg-black/20 aspect-square w-full rounded-xl p1 md:p-4 hover:bg-neutral-700 cursor-pointer {$$props.class}"
    on:click={onOpen}
>
    {#if category && $equipment[slot]}
    <img src="{baseUrl}/{$equipment[slot].path}/{$equipment[slot].file}" class="w-full" title={$equipment[slot].label} alt={$equipment[slot].label}>
    {:else}
    <p class="text-[9px] md:text-xs lg:text-base opacity-50">{placeholder}</p>
    {/if}
</div>
{/if}