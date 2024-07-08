function smallestTwoNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const result = sorted.slice(0, 2);

    console.log(result.join(' '));
}
