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
    
