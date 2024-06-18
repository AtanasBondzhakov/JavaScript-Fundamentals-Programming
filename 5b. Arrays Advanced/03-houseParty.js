function houseParty(data) {
    const guestsList = [];

    for (let line of data) {
        const tokens = line.split(' ');
        const name = tokens[0];

        if (tokens.length === 3) {

            if (!guestsList.includes(name)) {
                guestsList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guestsList.includes(name)) {
                const index = guestsList.indexOf(name);
                guestsList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestsList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']); //John is not in the list!
                              // Allie
    

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']); //Tom is already in the list!
                         //Tom
                         //Annie
                         //Garry
                         //Jerry
    