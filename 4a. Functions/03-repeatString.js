function repeatString(text, count) {
    let result = '';

    for (let i = 1; i <= count; i++) {
        result += text;
    }

    return result;
}

repeatString("abc", 3); //abcabcabc
repeatString("String", 2); //StringString