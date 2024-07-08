function processOddNumbers(numbers) {
    let result = numbers.filter((num, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse();

        console.log(result.join(' '));
}
