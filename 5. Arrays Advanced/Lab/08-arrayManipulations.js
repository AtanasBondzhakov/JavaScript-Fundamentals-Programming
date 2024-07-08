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
