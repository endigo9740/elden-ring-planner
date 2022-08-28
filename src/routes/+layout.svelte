<script lang="ts">
	import { onMount } from "svelte";

    import { menu } from "$lib/store";
    import Menu from "$lib/Menu.svelte";
    
	import '../app.css';

	// Toggle body scroll while selection present
    onMount(() => {
        menu.subscribe((mValue: boolean) => {
            const cssClass: string = 'overflow-hidden';
            mValue !== undefined ? document.body.classList.add(cssClass) : document.body.classList.remove(cssClass);
        });
    });
</script>

<svelte:head>
	<title>Elden Ring - Fashion Planner</title>
</svelte:head>

<Menu></Menu>
<slot />
