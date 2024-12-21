function easterEggs([text]) {
    const pattern = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z0-9]*\/+(?<amount>[\d]+)\/*/g;

    let match = pattern.exec(text);

    while(match !== null) {
        const color = match.groups.color;
        const amount = Number(match.groups.amount);

        console.log(`You found ${amount} ${color} eggs!`);
        match = pattern.exec(text);
    }
}