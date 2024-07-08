function firstAndLastKNumbers(numbers) {
    const kNum = numbers.shift();
    const firstKNumbers = numbers.slice(0, kNum);
    const lastKNumbers = numbers.slice(-kNum);

    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}
