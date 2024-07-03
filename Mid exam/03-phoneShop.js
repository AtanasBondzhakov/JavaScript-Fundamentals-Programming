function phoneShop(data) {
    let phonesStorage = data.shift().split(', ');
    let command = data.shift();

    while (command !== 'End') {
        const tokens = command.split(' - ');
        const action = tokens[0];
        const phone = tokens[1];

        if (action === 'Add') {
            if (!phonesStorage.includes(phone)) {
                phonesStorage.push(phone);
            }
        } else if (action === 'Remove') {
            if (phonesStorage.includes(phone)) {
                phonesStorage = phonesStorage.filter(p => p !== phone);
            }
        } else if (action === 'Bonus phone') {
            const [oldPhone, newPhone] = phone.split(':');

            if (phonesStorage.includes(oldPhone)) {
                const index = phonesStorage.indexOf(oldPhone);
                phonesStorage.splice(index + 1, 0, newPhone);
            }
        } else if (action === 'Last') {
            if (phonesStorage.includes(phone)) {
                const index = phonesStorage.indexOf(phone);
                const currentPhone = phonesStorage.splice(index, 1);
                phonesStorage.push(currentPhone);
            }
        }

        command = data.shift();
    }
    console.log(phonesStorage.join(', '));
}