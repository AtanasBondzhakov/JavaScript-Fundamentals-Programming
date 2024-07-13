function cardGame(data) {
    const cardsPower = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14
    }
    
    const cardsType = {
        S: 4, H: 3, D: 2, C: 1
    }

    const players = {};

    for (const player of data) {
        const [playerName, playerCards] = player.split(': ');
        const cards = playerCards.split(', ');

        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = [];
        }

        for (let card of cards) {
            if (!players[playerName].includes(card)) {
                players[playerName].push(card);
            }
        }
    }

    const entries = Object.entries(players)

    for (const [name, deck] of entries) {
        let points = 0;

        for (const card of deck) {
            const power = card.slice(0, card.length - 1);
            const type = card.slice(card.length - 1);
            points += cardsPower[power] * cardsType[type];
        }
        console.log(`${name}: ${points}`);
    }
}