function firstAndLastKNumbers(numbers) {
    const kNum = numbers.shift();
    const firstKNumbers = numbers.slice(0, kNum);
    const lastKNumbers = numbers.slice(-kNum);

    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]); //7 8
                                    //8 9
firstAndLastKNumbers([3, 6, 7, 8, 9]); //6 7 8
                                       //7 8 9