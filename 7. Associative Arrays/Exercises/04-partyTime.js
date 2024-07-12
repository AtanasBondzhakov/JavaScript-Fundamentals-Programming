function partyTime(data) {
    const guests = {
        vipList: [],
        regularList: [],
    }

    let command = data.shift();

    while (command !== 'PARTY') {
        const firstChar = command[0];

        if (isNaN(firstChar)) {
            guests.regularList.push(command)
        } else {
            guests.vipList.push(command);
        }
        command = data.shift();
    }

    for (const guest of data) {
        checkGuest(guests.vipList, guest);
        checkGuest(guests.regularList, guest);
    }

    const totalGuestsNotCome = guests.vipList.length + guests.regularList.length;
    console.log(totalGuestsNotCome);

    guests.vipList.forEach(g => console.log(g));
    guests.regularList.forEach(g => console.log(g));

    function checkGuest(arr, guest) {
        if (arr.includes(guest)) {
            const index = arr.indexOf(guest);
            arr.splice(index, 1);
        }
        return arr;
    }
}