function heroesOfCodeAndLogicVII(arr) {
    const heroesCount = Number(arr.shift());
    const heroesList = {};

    for (let i = 1; i <= heroesCount; i++) {
        const currentHero = arr.shift();
        let [hero, hp, mp] = currentHero.split(' ');
        hp = Number(hp);
        mp = Number(mp);

        heroesList[hero] = { hp, mp };
    }

    let command = arr.shift();

    while (command !== 'End') {
        const [action, heroName, ...params] = command.split(' - ');

        if (action === 'CastSpell') {
            const requiredMp = Number(params[0]);
            const spell = params[1];

            if (heroesList[heroName].mp >= requiredMp) {
                heroesList[heroName].mp -= requiredMp;
                console.log(`${heroName} has successfully cast ${spell} and now has ${heroesList[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spell}!`);
            }

        } else if (action === 'TakeDamage') {
            const damage = Number(params[0]);
            const attacker = params[1];

            heroesList[heroName].hp -= damage;
            if (heroesList[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[heroName].hp} HP left!`);
            } else {
                delete heroesList[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (action === 'Recharge') {
            let amount = Number(params[0]);

            if (heroesList[heroName].mp + amount > 200) {
                amount = 200 - heroesList[heroName].mp;
            }

            heroesList[heroName].mp += amount;
            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (action === 'Heal') {
            let amount = Number(params[0]);

            if (heroesList[heroName].hp + amount > 100) {
                amount = 100 - heroesList[heroName].hp;
            }

            heroesList[heroName].hp += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }

        command = arr.shift();
    }

    for (let hero in heroesList) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroesList[hero].hp}`);
        console.log(`  MP: ${heroesList[hero].mp}`);
    }
}