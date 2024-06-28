function counterStrike(data) {
    let energy = Number(data.shift());
    let command = data.shift();

    let wins = 0;

    while (command !== 'End of battle') {
        const currentEnergy = Number(command);

        if (energy < currentEnergy) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }

        energy -= currentEnergy;
        wins++;

        if (wins % 3 === 0) {
            energy += wins;
        }

        command = data.shift();
    }

    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}