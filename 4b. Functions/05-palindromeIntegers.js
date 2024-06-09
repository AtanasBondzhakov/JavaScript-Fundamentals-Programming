function palindromeIntegers(numbers) {
    for (let num of numbers) {
        let numStr = num.toString();
        let reversed = revertString(numStr);
        checkForPalindromeAndPrint(numStr, reversed);
    }

    function revertString(str) {
        let reversedNumStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedNumStr += str[i];
        }
        return reversedNumStr;
    }

    function checkForPalindromeAndPrint(str1, str2) {
        return console.log(str1 === str2);
    }
}

palindromeIntegers([123, 323, 421, 121]); //false true false true
palindromeIntegers([32, 2, 232, 1010]); //false true true false