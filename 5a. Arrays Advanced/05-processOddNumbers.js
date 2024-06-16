function processOddNumbers(numbers) {
    let result = numbers.filter((num, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse();

        console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]); //50 30
processOddNumbers([3, 0, 10, 4, 7, 3]); //6 8 0