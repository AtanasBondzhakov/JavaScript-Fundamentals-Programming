function smallestOfThreeNumbers(num1, num2, num3) {

    function smallerNumber(a, b) {
        return a < b ? a : b;
    }

    const smaller = smallerNumber(num1, num2);
    return smallerNumber(smaller, num3);
}

smallestOfThreeNumbers(2, 5, 3); //2
smallestOfThreeNumbers(25, 21, 4); //123
smallestOfThreeNumbers(600, 342, 123); //4
smallestOfThreeNumbers(2, 2, 2); //2