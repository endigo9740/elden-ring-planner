<script lang="ts">
    import { onMount } from "svelte";

    import { menu } from "$lib/store";
    import Item from "$lib/Item.svelte";
    import Selection from "$lib/Selection.svelte";

    // Toggle body scroll while selection present
    onMount(() => {
        menu.subscribe((mValue: boolean) => {
            const cssClass: string = 'overflow-hidden';
            mValue !== undefined ? document.body.classList.add(cssClass) : document.body.classList.remove(cssClass);
        });
    });
</script>

<!-- Selection Modal -->
<Selection></Selection>

<!-- Equipment -->
<div id="equipment" class="w-full max-w-[1024px] mx-auto py-8 px-4 space-y-8">

    <!-- Gear -->
    <section class="flex items-center space-x-4">

        <!-- Left Hand -->
        <div class="w-[20%] grid grid-cols-1 gap-4">
            <Item category="armaments" slot="armaments_1" placeholder="Left 1"></Item>
            <Item category="armaments" slot="armaments_2" placeholder="Left 2"></Item>
            <Item category="armaments" slot="armaments_3" placeholder="Left 3"></Item>
        </div>

        <!-- Body -->
        <div class="w-[60%] space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <!-- Armor: Head -->
                <Item category="armors_helms" slot="helm" placeholder="Helm"></Item>
                <!-- Talismans -->
                <div class="grid grid-cols-2 gap-4">
                    <Item category="talismans" slot="talisman_1" placeholder="Talisman"></Item>
                    <Item category="talismans" slot="talisman_2" placeholder="Talisman"></Item>
                    <Item category="talismans" slot="talisman_3" placeholder="Talisman"></Item>
                    <Item category="talismans" slot="talisman_4" placeholder="Talisman"></Item>
                </div>
                <!-- Armor: Chest -->
                <Item category="armors_chests" slot="chest" placeholder="Chest"></Item>
                <!-- Armor: Hands -->
                <Item category="armors_hands" slot="hands" placeholder="Hands" class="row-start-2.png"></Item>
                <!-- Armor: Legs -->
                <Item category="armors_legs" slot="legs" placeholder="Legs" class="row-start-3.png"></Item>
                <!-- Ammo -->
                <div class="grid grid-cols-2 gap-4">
                    <Item category="ammo_arrows" slot="arrow_1" placeholder="Arrow"></Item>
                    <Item category="ammo_arrows" slot="arrow_2" placeholder="Arrow"></Item>
                    <Item category="ammo_bolts" slot="bolt_1" placeholder="Bolt"></Item>
                    <Item category="ammo_bolts" slot="bold_2" placeholder="Bolt"></Item>
                </div>
            </div>
        </div>

        <!-- Right Hand -->
        <div class="w-[20%] grid grid-cols-1 gap-4">
            <Item category="armaments" slot="armaments_4" placeholder="Right 1"></Item>
            <Item category="armaments" slot="armaments_5" placeholder="Right 2"></Item>
            <Item category="armaments" slot="armaments_6" placeholder="Right 3"></Item>
        </div>

    </section>

    <hr>
    
    <!-- Spells -->
    <section class="space-y-4">
        <h3 class="text-center">Spells</h3>
        <div class="grid grid-cols-5 gap-4">
            <Item category="spells" slot="spell_01" placeholder="1"></Item>
            <Item category="spells" slot="spell_02" placeholder="2"></Item>
            <Item category="spells" slot="spell_03" placeholder="3"></Item>
            <Item category="spells" slot="spell_04" placeholder="4"></Item>
            <Item category="spells" slot="spell_05" placeholder="5"></Item>
            <Item category="spells" slot="spell_06" placeholder="6"></Item>
            <Item category="spells" slot="spell_07" placeholder="7"></Item>
            <Item category="spells" slot="spell_08" placeholder="8"></Item>
            <Item category="spells" slot="spell_09" placeholder="9"></Item>
            <Item category="spells" slot="spell_10" placeholder="10"></Item>
        </div>
    </section>

    <hr>

    <!-- Consumables -->
    <section class="space-y-4">
        <h3 class="text-center">Consumables</h3>
        <div class="flex items-center space-x-8">
            <div class="w-[72%] grid grid-cols-5 gap-4">
                <Item category="consumables" slot="hotbar_01" placeholder="1"></Item>
                <Item category="consumables" slot="hotbar_02" placeholder="2"></Item>
                <Item category="consumables" slot="hotbar_03" placeholder="3"></Item>
                <Item category="consumables" slot="hotbar_04" placeholder="4"></Item>
                <Item category="consumables" slot="hotbar_05" placeholder="5"></Item>
                <Item category="consumables" slot="hotbar_06" placeholder="6"></Item>
                <Item category="consumables" slot="hotbar_07" placeholder="7"></Item>
                <Item category="consumables" slot="hotbar_08" placeholder="8"></Item>
                <Item category="consumables" slot="hotbar_09" placeholder="9"></Item>
                <Item category="consumables" slot="hotbar_10" placeholder="10"></Item>
            </div>
            <div class="w-[28%] grid grid-cols-2 gap-4">
                <Item category="consumables" slot="quickbar_t" placeholder="T"></Item>
                <Item category="consumables" slot="quickbar_r" placeholder="R"></Item>
                <Item category="consumables" slot="quickbar_l" placeholder="L"></Item>
                <Item category="consumables" slot="quickbar_b" placeholder="B"></Item>
            </div>
        </div>
    </section>

</div>
