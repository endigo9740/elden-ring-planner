import { browser } from "$app/environment";
import { writable, type Writable } from 'svelte/store';

// Writable: Menu - contains: {category, slot, label}
export const menu: Writable<any> = writable(undefined);

// Writable: Equipment
export const equipmentDefaults: any = {

    // Armor
    helm: null,
    chest: null,
    hands: null,
    legs: null,

    // Armaments
    armaments_1: null,
    armaments_2: null,
    armaments_3: null,
    armaments_4: null,
    armaments_5: null,
    armaments_6: null,

    // Talismans
    talisman_1: null,
    talisman_2: null,
    talisman_3: null,
    talisman_4: null,

    // Ammo
    arrow_1: null,
    arrow_2: null,
    bolt_1: null,
    bold_2: null,

    // Spells
    spell_01: null,
    spell_02: null,
    spell_03: null,
    spell_04: null,
    spell_05: null,
    spell_06: null,
    spell_07: null,
    spell_08: null,
    spell_09: null,
    spell_10: null,

    // Hotbar
    hotbar_01: null,
    hotbar_02: null,
    hotbar_03: null,
    hotbar_04: null,
    hotbar_05: null,
    hotbar_06: null,
    hotbar_07: null,
    hotbar_08: null,
    hotbar_09: null,
    hotbar_10: null,
    hotbar_11: null,
    hotbar_12: null,
    hotbar_13: null,
    hotbar_14: null,

};
export const equipment: Writable<any> = writable(equipmentDefaults);

export const clearAllItems = (): void => {
    const newObj = {...equipmentDefaults, ...{}};
    equipment.set(newObj);
    localStorage.clear();
};

// Persist stores to LocalStorage
if (browser) {

    // LocalStorage: Menu
    let lsMenu: any = localStorage.getItem('menu');
    if (lsMenu !== null && lsMenu !== 'undefined') { menu.set(JSON.parse(lsMenu)); }
    menu.subscribe(v => localStorage.setItem('menu', JSON.stringify(v)));

    // LocalStorage: Equipment
    let lsEquipment: any = localStorage.getItem('equipment');
    if (lsEquipment !== null) { equipment.set(JSON.parse(lsEquipment)); }
    equipment.subscribe(v => localStorage.setItem('equipment', JSON.stringify(v)));

}