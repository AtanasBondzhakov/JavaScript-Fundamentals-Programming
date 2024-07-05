function printNthElement(arr) {
    const step = Number(arr.pop());
    const result = [];

    for (let i = 0; i < arr.length; i += step) {
        const currentEl = arr[i]
        result.push(currentEl);
    }

    console.log(result.join(' '));
}
