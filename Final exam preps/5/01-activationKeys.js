function activationKeys(arr) {
    let key = arr.shift();
    let command = arr.shift();

    while (command !== 'Generate') {
        const [action, ...params] = command.split('>>>');

        if (action === 'Contains') {
            const subStr = params[0];

            if (key.includes(subStr)) {
                console.log(`${key} contains ${subStr}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (action === 'Flip') {
            const caseOption = params[0];
            const startIndex = Number(params[1]);
            const endIndex = Number([params[2]]);
            const subsStr = key.substring(startIndex, endIndex);

            if (caseOption === 'Upper') {
                key = key.replace(subsStr, subsStr.toUpperCase());
            } else {
                key = key.replace(subsStr, subsStr.toLowerCase());
            }
            console.log(key);

        } else if (action === 'Slice') {
            const startIndex = Number(params[0]);
            const endIndex = Number(params[1]);
            const subsStr = key.substring(startIndex, endIndex);

            key = key.replace(subsStr, '');
            console.log(key);
        }

        command = arr.shift();
    }
    console.log(`Your activation key is: ${key}`);
}