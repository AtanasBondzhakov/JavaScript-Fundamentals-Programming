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

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); //94 1 69 2 63 3 52 18 31 21
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]); //690 2 47 6 45 7 34 19 32 32