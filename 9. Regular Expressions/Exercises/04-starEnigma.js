function starEnigma(data) {
    const msgsCount = Number(data.shift());

    const starPattern = /[star]/gi;
    const pattern = /[^@\-!,:>]*@(?<name>[A-Za-z]+)[^@\-!,:>]*:(?<population>\d+)[^@\-!,:>]*!(?<type>[AD])![^@\-!,:>]*->(?<count>\d+)[^@\-!,:>]*/;
    const attackedPlanets = [];
    const destroyedPlanets = [];

    for (let i = 0; i < msgsCount; i++) {
        const currentMsg = data[i];
        const starCount = currentMsg.match(starPattern).length;
        let decryptedMsg = '';

        for (let j = 0; j < currentMsg.length; j++) {
            let code = currentMsg[j].charCodeAt() - starCount;
            decryptedMsg += String.fromCharCode(code);
        }

        const match = pattern.exec(decryptedMsg);

        if (match) {
            const { name, population, type, count } = match.groups;
            if (type === 'A') {
                attackedPlanets.push(name);
            } else if (type === 'D') {
                destroyedPlanets.push(name);
            }
        }
    }

    const sortedAttacked = attackedPlanets.sort((a, b) => a.localeCompare(b));
    const sortedDestroyed = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    sortedAttacked.forEach(p => console.log(`-> ${p}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    sortedDestroyed.forEach(p => console.log(`-> ${p}`));
}