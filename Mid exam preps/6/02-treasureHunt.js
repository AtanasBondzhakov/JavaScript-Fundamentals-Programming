function treasureHunt(data) {
    let treasureChest = data.shift()
        .split('|');

    let command = data.shift();
    let sumLength = 0;

    while (command !== 'Yohoho!') {
        const tokens = command.split(' ');
        const action = tokens.shift();

        if (action === 'Loot') {
            const [...items] = tokens;

            for (let item of items) {
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }
            }
        } else if (action === 'Drop') {
            const index = Number(tokens[0]);

            if (index >= 0 && index < treasureChest.length) {
                const currentItem = treasureChest.splice(index, 1);
                treasureChest.push(currentItem);
            }
        } else if (action === 'Steal') {
            const count = Number(tokens[0]);
            const stolenItems = treasureChest.splice(-count);
            console.log(stolenItems.join(', '));
        }
        command = data.shift();
    }

    for (let item of treasureChest) {
        sumLength += item.length;
    }

    let averageGain = sumLength / treasureChest.length;

    if (treasureChest.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}