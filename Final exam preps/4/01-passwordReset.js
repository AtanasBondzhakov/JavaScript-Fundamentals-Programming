function passwordReset(arr) {
    let text = arr.shift();
    let command = arr.shift();

    while (command !== 'Done') {
        const [action, ...params] = command.split(' ');

        if (action === 'TakeOdd') {
            let rawPass = '';
            for (let i = 1; i < text.length; i += 2) {
                rawPass += text[i];
            }
            text = rawPass;
            console.log(text);

        } else if (action === 'Cut') {
            const index = Number(params[0]);
            const length = Number(params[1]);
            let substring = text.substring(index, index + length);

            text = text.replace(substring, '');
            console.log(text);

        } else if (action === 'Substitute') {
            const substring = params[0];
            const substitute = params[1];

            if (text.includes(substring)) {
                while (text.includes(substring)) {
                    text = text.replace(substring, substitute);
                }
                console.log(text);
            } else {
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }
    console.log(`Your password is: ${text}`);
}