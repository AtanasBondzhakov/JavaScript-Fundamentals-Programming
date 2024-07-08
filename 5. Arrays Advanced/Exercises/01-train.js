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
