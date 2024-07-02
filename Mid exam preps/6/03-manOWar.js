function manOWar(data) {
    const pirateShipStatus = data.shift()
        .split('>')
        .map(Number);

    const warshipStatus = data.shift()
        .split('>')
        .map(Number);

    const maxHealthCapacity = Number(data.shift());
    let command = data.shift();

    while (command !== 'Retire') {
        const tokens = command.split(' ');
        const action = tokens.shift();
        const index = Number(tokens.shift());

        if (action === 'Fire') {
            const damage = Number(tokens.shift());

            if (index >= 0 && index < warshipStatus.length) {
                warshipStatus[index] -= damage;
            }

            if (warshipStatus[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }

        } else if (action === 'Defend') {
            const endIndex = Number(tokens.shift());
            const damage = Number(tokens.shift());

            if ((index >= 0 && index < pirateShipStatus.length) && (endIndex >= 0 && endIndex < pirateShipStatus.length)) {
                for (let i = index; i <= endIndex; i++) {
                    pirateShipStatus[i] -= damage;

                    if (pirateShipStatus[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }

        } else if (action === 'Repair') {
            const health = Number(tokens.shift());

            if (index >= 0 && index < pirateShipStatus.length) {
                pirateShipStatus[index] += health;

                if (pirateShipStatus[index] > maxHealthCapacity) {
                    pirateShipStatus[index] = maxHealthCapacity;
                }
            }

        } else if (action === 'Status') {
            const almostBrokenSection = pirateShipStatus.filter(s => s < maxHealthCapacity * 0.2);
            console.log(`${almostBrokenSection.length} sections need repair.`);
        }

        command = data.shift();
    }

    let pirateShipSum = 0;
    let warshipSum = 0;

    pirateShipStatus.forEach(s => pirateShipSum += Number(s));
    warshipStatus.forEach(s => warshipSum += Number(s));

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}