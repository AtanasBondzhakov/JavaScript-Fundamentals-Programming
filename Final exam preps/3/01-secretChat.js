function secretChat(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Reveal') {
        const [action, ...params] = command.split(':|:');

        if (action === 'InsertSpace') {
            const index = Number(params.shift());
            message = message.substring(0, index) + ' ' + message.substring(index);
        } else if (action === 'Reverse') {
            let substring = params.shift();

            if (message.includes(substring)) {
                message = message.replace(substring, '');
                substring = substring.split('').reverse().join('');
                message = message + substring;
            } else {
                console.log('error');
                command = arr.shift();
                continue;
            }
        } else if (action === 'ChangeAll') {
            const substring = params.shift();
            const replacement = params.shift();

            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
        }

        command = arr.shift();
        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}