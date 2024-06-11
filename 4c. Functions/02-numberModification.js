function numberModification(num) {
    let numAsStr = num.toString();
    let avgDigitSum = 0;
    
    while (avgDigitSum <= 5) {
        avgDigitSum = calculateAvgSum(numAsStr);

        if (avgDigitSum <= 5) {
            numAsStr += 9;
        }
    }

    function calculateAvgSum(numString) {
        let currentSum = 0;
        for (let num of numString) {
            currentSum += Number(num);
        }
        return currentSum / numString.length;
    }

    console.log(numAsStr);
}

numberModification(101); //1019999
numberModification(5835); //5835
