function lowerOrUpper(char) {
    let result = '';
    if (char === char.toLowerCase()) {
        result = 'lower-case';
    } else {
        result = 'upper-case';
    }

    console.log(result);
}

lowerOrUpper('L'); //upper-case
lowerOrUpper('f'); //lower-case