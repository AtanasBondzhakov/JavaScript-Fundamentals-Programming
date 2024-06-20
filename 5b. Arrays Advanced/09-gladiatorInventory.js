function gladiatorInventory(data) {
    const inventory = data.shift().split(' ');

    for (let line of data) {
        const [command, item] = line.split(' ');

        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                const index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                const index = inventory.indexOf(item);
                const repairedItem = inventory.splice(index, 1);
                inventory.push(repairedItem);
            }
            
        } else if (command === 'Upgrade') {
            const [equipment, upgrade] = item.split('-')
            if (inventory.includes(equipment)) {
                const index = inventory.indexOf(equipment);
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`)
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']); //SWORD SWORD:Steel Bag Spear
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']); //SWORD SWORD:Steel Bag Spear