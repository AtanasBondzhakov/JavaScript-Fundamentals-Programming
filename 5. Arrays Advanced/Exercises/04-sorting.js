function sorting(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    const result = [];

    while (sortedNumbers.length > 0) {
        const biggest = sortedNumbers.shift();
        const smallest = sortedNumbers.pop();
        result.push(biggest, smallest);
    }

    console.log(result.join(' '));
}
