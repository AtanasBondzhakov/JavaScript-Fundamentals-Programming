function dungeonestDark(data) {
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    let isAlive = true;
    
    let rooms = data[0].split('|');

    for (let room of rooms) {
        const [command, num] = room.split(' ');

        if (command === 'potion') {
            let healValue = Number(num);

            if (health + healValue > 100) {
                healValue = 100 - health;

            }

            health += healValue;
            console.log(`You healed for ${healValue} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            let foundCoins = Number(num);
            coins += foundCoins;
            console.log(`You found ${foundCoins} coins.`);

        } else {
            let monsterName = command;
            let monsterAttack = Number(num);
            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`)
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                isAlive = false;
                break;
            }

        }
        bestRoom++;
    }

    if (isAlive) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
