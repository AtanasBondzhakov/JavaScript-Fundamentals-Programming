function signCheck(num1, num2, num3) {

    function checkTwoNumbers(a, b) {
        let result = '';

        if (a * b < 0) {
            result = 'Negative';
        } else {
            result = 'Positive';
        }

        return result;
    }

    function checkThreeNumbers(func, a) {
        let result = '';

        if (func === 'Negative' && a >= 0) {
            result = 'Negative';
        } else if (func === 'Positive' && a < 0) {
            result = 'Negative';
        } else {
            result = 'Positive';
        }

        return result;
    }

    const result = checkThreeNumbers(checkTwoNumbers(num1, num2), num3);
    console.log(result);
}

