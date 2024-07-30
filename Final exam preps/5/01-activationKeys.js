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

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
