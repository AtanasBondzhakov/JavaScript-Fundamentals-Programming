function reverseAnArrayOfNumbers(n, arr) {
    const result = [];

    for (let i = n - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    console.log(result.join(' '));
}
