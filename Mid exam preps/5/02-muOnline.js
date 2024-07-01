function muOnline(data) {
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;

    const rooms = data.split('|');

    for (let room of rooms) {
        const tokens = room.split(' ');
        const command = tokens[0];

        bestRoom++;

        if (command === 'potion') {
            let heal = Number(tokens[1]);

            if (health + heal > 100) {
                heal = 100 - health;
            }

            health += heal;

            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            const foundBitcoins = Number(tokens[1]);
            bitcoins += foundBitcoins;
            console.log(`You found ${foundBitcoins} bitcoins.`);

        } else {
            const monsterName = command;
            const monsterAttack = Number(tokens[1]);

            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }

    }

    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}