import { writable, type Writable } from 'svelte/store';

// Selection Menu - contains: {category, slot}
export const menu: Writable<any> = writable(undefined);

// Equipment
export const equipment: Writable<any> = writable({

    // Armor
    helm: undefined,
    chest: undefined,
    hands: undefined,
    legs: undefined,

    // Armaments
    armaments_1: undefined,
    armaments_2: undefined,
    armaments_3: undefined,
    armaments_4: undefined,
    armaments_5: undefined,
    armaments_6: undefined,

    // Talismans
    talisman_1: undefined,
    talisman_2: undefined,
    talisman_3: undefined,
    talisman_4: undefined,

    // Ammo
    arrow_1: undefined,
    arrow_2: undefined,
    bolt_1: undefined,
    bold_2: undefined,

    // Spells
    spell_01: undefined,
    spell_02: undefined,
    spell_03: undefined,
    spell_04: undefined,
    spell_05: undefined,
    spell_06: undefined,
    spell_07: undefined,
    spell_08: undefined,
    spell_09: undefined,
    spell_10: undefined,

    // Hotbar
    hotbar_01: undefined,
    hotbar_02: undefined,
    hotbar_03: undefined,
    hotbar_04: undefined,
    hotbar_05: undefined,
    hotbar_06: undefined,
    hotbar_07: undefined,
    hotbar_08: undefined,
    hotbar_09: undefined,
    hotbar_10: undefined,
    hotbar_11: undefined,
    hotbar_12: undefined,
    hotbar_13: undefined,
    hotbar_14: undefined,

});
