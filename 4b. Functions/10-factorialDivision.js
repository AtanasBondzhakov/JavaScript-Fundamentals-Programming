function factorialDivision(firstNum, secondNum) {

    function factorial(num) {
        let product = 1;
        for (let i = 2; i <= num; i++) {
            product *= i;
        }
        return product;
    }

    const firstFactorial = factorial(firstNum);
    const secondFactorial = factorial(secondNum);
    const result = firstFactorial / secondFactorial;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2); //60.00
factorialDivision(6, 2); //360.00