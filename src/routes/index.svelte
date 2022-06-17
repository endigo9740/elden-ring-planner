<script lang="ts">
    import Item from "$lib/Item.svelte";
    import { source } from "$lib/source";
    import { clearAllItems } from "$lib/store";

    function clear(): void {
        if (confirm('Are you sure you want to clear all items?')) {
            clearAllItems();
        }
    }
</script>

<div id="equipment" class="w-full max-w-[1024px] mx-auto py-8 px-4 space-y-8">
    
    <header class="flex justify-between items-center">
        <h2>Fashion Planner</h2>
        <button type="button" on:click={clear}>Clear</button>
    </header>

    <hr>

    <!-- Gear -->
    <section class="block md:flex items-center space-y-8 md:space-y-0 md:space-x-4">

        <!-- Left Hand -->
        <div class="md:w-[20%] grid grid-cols-3 md:grid-cols-1 gap-4">
            <Item source={source.armaments} slot="armaments_1" label="Left 1"></Item>
            <Item source={source.armaments} slot="armaments_2" label="Left 2"></Item>
            <Item source={source.armaments} slot="armaments_3" label="Left 3"></Item>
        </div>

        <!-- Body -->
        <div class="md:w-[60%] space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <!-- Armor: Head -->
                <Item source={source.armors.helms} slot="helm" label="Helm"></Item>
                <!-- Talismans -->
                <div class="grid grid-cols-2 gap-4">
                    <Item source={source.talismans} slot="talisman_1" label="Talisman"></Item>
                    <Item source={source.talismans} slot="talisman_2" label="Talisman"></Item>
                    <Item source={source.talismans} slot="talisman_3" label="Talisman"></Item>
                    <Item source={source.talismans} slot="talisman_4" label="Talisman"></Item>
                </div>
                <!-- Armor: Chest -->
                <Item source={source.armors.chests} slot="chest" label="Chest"></Item>
                <!-- Armor: Hands -->
                <Item source={source.armors.hands} slot="hands" label="Hands" class="flip-horz"></Item>
                <!-- Armor: Legs -->
                <Item source={source.armors.legs} slot="legs" label="Legs"></Item>
                <!-- Ammo -->
                <div class="grid grid-cols-2 gap-4">
                    <Item source={source.ammo.arrows} slot="arrow_1" label="Arrow"></Item>
                    <Item source={source.ammo.arrows} slot="arrow_2" label="Arrow"></Item>
                    <Item source={source.ammo.bolts} slot="bolt_1" label="Bolt"></Item>
                    <Item source={source.ammo.bolts} slot="bold_2" label="Bolt"></Item>
                </div>
            </div>
        </div>

        <!-- Right Hand -->
        <div class="md:w-[20%] grid grid-cols-3 md:grid-cols-1 gap-4">
            <Item source={source.armaments} slot="armaments_4" label="Right 1"></Item>
            <Item source={source.armaments} slot="armaments_5" label="Right 2"></Item>
            <Item source={source.armaments} slot="armaments_6" label="Right 3"></Item>
        </div>

    </section>

    <hr>
    
    <!-- Spells -->
    <section class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Item source={source.spells} slot="spell_01" label="Spell 1"></Item>
        <Item source={source.spells} slot="spell_02" label="Spell 2"></Item>
        <Item source={source.spells} slot="spell_03" label="Spell 3"></Item>
        <Item source={source.spells} slot="spell_04" label="Spell 4"></Item>
        <Item source={source.spells} slot="spell_05" label="Spell 5"></Item>
        <Item source={source.spells} slot="spell_06" label="Spell 6"></Item>
        <Item source={source.spells} slot="spell_07" label="Spell 7"></Item>
        <Item source={source.spells} slot="spell_08" label="Spell 8"></Item>
        <Item source={source.spells} slot="spell_09" label="Spell 9"></Item>
        <Item source={source.spells} slot="spell_10" label="Spell 10"></Item>
    </section>

    <hr>

    <!-- Quickslots -->
    <section class="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
        <div class="md:w-[72%] grid grid-cols-2 md:grid-cols-5 gap-4">
            <Item source={source.consumables} slot="hotbar_01" label="Item 1"></Item>
            <Item source={source.consumables} slot="hotbar_02" label="Item 2"></Item>
            <Item source={source.consumables} slot="hotbar_03" label="Item 3"></Item>
            <Item source={source.consumables} slot="hotbar_04" label="Item 4"></Item>
            <Item source={source.consumables} slot="hotbar_05" label="Item 5"></Item>
            <Item source={source.consumables} slot="hotbar_06" label="Item 6"></Item>
            <Item source={source.consumables} slot="hotbar_07" label="Item 7"></Item>
            <Item source={source.consumables} slot="hotbar_08" label="Item 8"></Item>
            <Item source={source.consumables} slot="hotbar_09" label="Item 9"></Item>
            <Item source={source.consumables} slot="hotbar_10" label="Item 10"></Item>
        </div>
        <div class="md:w-[28%] grid grid-cols-2 gap-4">
            <Item source={source.consumables} slot="quickbar_t" label="Top"></Item>
            <Item source={source.consumables} slot="quickbar_r" label="Right"></Item>
            <Item source={source.consumables} slot="quickbar_l" label="left"></Item>
            <Item source={source.consumables} slot="quickbar_b" label="Bottom"></Item>
        </div>
    </section>

    <hr>
    
    <!-- Footer -->
    <footer class="text-sm flex justify-between space-x-8">
        <div class="flex space-x-2">
            <a href="https://github.com/endigo9740/elden-ring-planner" target="_blank">Contribute</a>
            <span class="opacity-10">|</span>
            <a href="https://twitter.com/SkeleMann/status/1509149096329854985" target="_blank">Media</a>
        </div>
        <a href="https://endigodesign.com/" target="_blank">By <strong>Endigo Design</strong></a>
    </footer>

</div>
