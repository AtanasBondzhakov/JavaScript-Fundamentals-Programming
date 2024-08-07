function oddAndEvenSum(num) {
    let numAsStr = num.toString();

    function sumOddNumbers(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 !== 0) {
                sum += Number(num[i]);
            }
        }
        return sum;
    }

    function sumEvenNumbers(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            if (num[i] % 2 === 0) {
                sum += Number(num[i]);
            }
        }
        return sum;
    }

    const oddSum = sumOddNumbers(numAsStr);
    const evenSum = sumEvenNumbers(numAsStr);

    function resultMessage(oddSum, evenSum) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }

    resultMessage(oddSum, evenSum);
}
