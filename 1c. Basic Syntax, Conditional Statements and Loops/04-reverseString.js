function reverseString(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        let currentChar = str[i];
        result += currentChar;
    }

    console.log(result);
}