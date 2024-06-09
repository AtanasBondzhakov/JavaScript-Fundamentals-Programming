function addAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    const medialResult = sum(num1, num2);
    const result = subtract(medialResult, num3);
    return result;
}

addAndSubtract(23, 6, 10); //19
addAndSubtract(1, 17, 30); //-12
addAndSubtract(42, 58, 100); //0