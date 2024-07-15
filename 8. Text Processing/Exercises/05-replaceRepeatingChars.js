function replaceRepeatingChars(str) {
    let initialChar = '';
    let result = '';

    for (const char of str) {
        if (char !== initialChar) {
            initialChar = char;
            result += char;
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'
);