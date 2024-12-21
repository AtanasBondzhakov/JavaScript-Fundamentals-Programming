function galacticCodeDecryption(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Finalize') {
        const [action, ...params] = command.split(' ');

        if (action === 'Encrypt') {
            message = message.split('').reverse().join('');
            console.log(message);

        } else if (action === 'Decrypt') {
            let updatedMessage = ''
            for (let char of message) {
                if (char === char.toLowerCase()) {
                    updatedMessage += char.toUpperCase();
                } else {
                    updatedMessage += char.toLowerCase()
                }
            }
            message = updatedMessage;
            console.log(message);

        } else if (action === 'Substitute') {
            const oldChar = params[0];
            const newChar = params[1];

            if (!message.includes(oldChar)) {
                console.log('Character not found.');
                command = arr.shift();
                continue;
            }

            while (message.includes(oldChar)) {
                message = message.replace(oldChar, newChar);
            }
            console.log(message);

        } else if (action === 'Scramble') {
            const index = Number(params[0]);
            const char = params[1];

            if (index < 0 || index >= message.length) {
                console.log('Index out of bounds.');
            } else {
                message = message.substring(0, index) + char + message.substring(index + 1);
                console.log(message);
            }

        } else if (action === 'Remove') {
            const subStr = params[0];

            while (message.includes(subStr)) {
                message = message.replace(subStr, '');
            }
            console.log(message);

        } else {
            console.log('Invalid command detected!');
        }

        command = arr.shift();
    }
}