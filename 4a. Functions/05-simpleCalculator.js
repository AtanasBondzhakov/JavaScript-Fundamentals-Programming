function simpleCalculator(num1, num2, operator) {
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;

    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    }
}

simpleCalculator(5, 5, 'multiply'); //25
simpleCalculator(40, 8, 'divide'); //5
simpleCalculator(12, 19, 'add'); //31
simpleCalculator(50, 13, 'subtract'); //37