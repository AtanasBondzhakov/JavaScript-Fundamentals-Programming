function registration(data) {
    let username = data.shift();
    let command = data.shift();

    while (command !== 'Registration') {
        const tokens = command.split(' ');
        const action = tokens.shift();

        if (action === 'Letters') {
            const caseOption = tokens.shift();
            if (caseOption === 'Lower') {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();
            }
            console.log(username);

        } else if (action === 'Reverse') {
            const [startIdx, endIdx] = tokens.map(Number);

            if (startIdx >= 0 && startIdx < username.length && endIdx >= 0 && endIdx < username.length) {
                let subString = username.substring(startIdx, endIdx + 1);
                subString = subString.split('').reverse().join('');
                console.log(subString);
            }

        } else if (action === 'Substring') {
            const subString = tokens.shift();
            if (username.includes(subString)) {
                username = username.replace(subString, '');
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${subString}.`);
            }

        } else if (action === 'Replace') {
            const char = tokens.shift();
            while (username.includes(char)) {
                username = username.replace(char, '-');
            }
            console.log(username);

        } else if (action === 'IsValid') {
            const char = tokens.shift();
            if (username.includes(char)) {
                console.log('Valid username.');
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
        command = data.shift();
    }
}