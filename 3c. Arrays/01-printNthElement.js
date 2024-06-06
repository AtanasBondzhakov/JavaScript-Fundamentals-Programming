function printNthElement(arr) {
    const step = Number(arr.pop());
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        const currentEl = arr[i]
        result.push(currentEl);
    }

    console.log(result.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']); //5 31 20
printNthElement(['dsa', 'asd', 'test', 'test', '2']); //dsa test
printNthElement(['1', '2', '3', '4', '5', '6']); //1