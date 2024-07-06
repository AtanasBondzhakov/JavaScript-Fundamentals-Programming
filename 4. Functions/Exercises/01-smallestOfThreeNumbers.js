function smallestOfThreeNumbers(num1, num2, num3) {

    function smallerNumber(a, b) {
        return a < b ? a : b;
    }

    const smaller = smallerNumber(num1, num2);
    return smallerNumber(smaller, num3);
}
