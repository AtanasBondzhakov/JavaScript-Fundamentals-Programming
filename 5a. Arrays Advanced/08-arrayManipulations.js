function arrayManipulations(arr) {
    let result = arr.shift().split(' ').map(Number);

    for (let line of arr) {
        let [command, firstValue, secondValue] = line.split(' ');
        firstValue = Number(firstValue);
        secondValue = Number(secondValue);

        if (command === 'Add') {
            result.push(firstValue);
        } else if (command === 'Remove') {
            result = result.filter(num => num !== firstValue);
        } else if (command === 'RemoveAt') {
            result.splice(firstValue, 1);
        } else if (command === 'Insert') {
            result.splice(secondValue, 0, firstValue);
        }
    }

    console.log(result.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']); //4 53 6 8 43 3
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']); //6 2 6 65 42 8