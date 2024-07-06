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
