function negativeOrPositiveNumbers(arr) {
    const result = [];

    for (let el of arr) {
        if (Number(el) < 0) {
            result.unshift(Number(el));
        } else {
            result.push(Number(el));
        }
    }

    console.log(result.join('\n'));
}
