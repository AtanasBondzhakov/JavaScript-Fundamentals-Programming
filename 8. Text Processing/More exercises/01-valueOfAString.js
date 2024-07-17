function valueOfAString(data) {
    const str = data[0];
    const caseOption = data[1];

    let total = 0;

    if (caseOption === 'LOWERCASE') {
        for (const char of str) {
            const code = calculateAsciiCode(char);
            if (char.toLowerCase() === char && code > 96 && code < 123) {
                total += code;
            }
        }

    } else if (caseOption === 'UPPERCASE') {
        for (const char of str) {
            const code = calculateAsciiCode(char);
            if (char.toUpperCase() === char && code > 64 && code < 91) {
                total += calculateAsciiCode(char);
            }
        }
    }

    function calculateAsciiCode(letter) {
        return letter.charCodeAt(0);
    }

    console.log(`The total sum is: ${total}`);
}