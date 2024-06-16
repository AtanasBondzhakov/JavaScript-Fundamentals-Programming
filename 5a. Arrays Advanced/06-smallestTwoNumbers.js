function smallestTwoNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const result = sorted.slice(0, 2);

    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]); //5 15
smallestTwoNumbers([3, 0, 10, 4, 7, 3]); //0 3