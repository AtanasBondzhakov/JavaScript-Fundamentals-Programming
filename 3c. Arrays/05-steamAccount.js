function steamAccount(data) {
    let account = data.shift().split(' ');
    let line = data.shift();

    while (line !== 'Play!') {
        const tokens = line.split(' ');
        const command = tokens[0];
        const game = tokens[1];

        if (command === 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (command === 'Uninstall') {
            if (account.includes(game)) {
                const indexOfGame = account.indexOf(game);
                account.splice(indexOfGame, 1);
            }
        } else if (command === 'Update') {
            if (account.includes(game)) {
                const indexOfGame = account.indexOf(game);
                const [currentGame] = account.splice(indexOfGame, 1);
                account.push(currentGame);
            }
        } else if (command === 'Expansion') {
            const [initialGame, expansion] = game.split('-');
            if (account.includes(initialGame)) {
                const indexOfGame = account.indexOf(initialGame);
                account.splice(indexOfGame + 1, 0, `${initialGame}:${expansion}`);
            }
        }

        line = data.shift();
    }
    console.log(account.join(' '));
}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']); //CS CS:Go LoL Diablo
steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']); //CS Diablo WoW