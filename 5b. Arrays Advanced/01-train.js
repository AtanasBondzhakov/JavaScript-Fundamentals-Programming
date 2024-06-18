function train(data) {
    let wagons = data.shift()
        .split(' ')
        .map(Number);
    const wagonCapacity = Number(data.shift());

    for (let line of data) {
        let tokens = line.split(' ');
        if (tokens.length === 1) {
            const passengers = Number(tokens.shift());

            for (let i = 0; i < wagons.length; i++) {
                let currentWagon = wagons[i];
                if (wagonCapacity >= currentWagon + passengers) {
                    // currentWagon += passengers;
                    wagons[i] += passengers;
                    break;
                }
            }

        } else {
            const passengers = tokens[1];
            wagons.push(passengers);
        }
    }

    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']); //72 54 21 12 4 75 23 10 0
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']); //10 10 10 10 10 10 10