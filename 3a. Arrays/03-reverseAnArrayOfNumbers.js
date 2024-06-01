function reverseAnArrayOfNumbers(n, arr) {
    const result = [];

    for (let i = n - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    console.log(result.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]); //30 20 10
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]); //5 99 20 -1
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]); //43 66