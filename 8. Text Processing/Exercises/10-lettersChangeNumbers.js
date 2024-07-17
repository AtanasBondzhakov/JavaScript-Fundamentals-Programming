function lettersChangeNumbers(data) {
    const strings = data.split(' ')
        .filter(x => x !== '');

    let total = 0;

    strings.forEach(str => {
        const leftLetter = str.substring(0, 1);
        const rightLetter = str.substring(str.length - 1);
        const num = Number(str.substring(1, str.length - 1));

        if (leftLetter.toUpperCase() === leftLetter) {
            total += num / calcUpperCasePosition(leftLetter);
        } else {
            total += num * calcLowerCasePosition(leftLetter)
        }

        if (rightLetter.toUpperCase() === rightLetter) {
            total -= calcUpperCasePosition(rightLetter);
        } else {
            total += calcLowerCasePosition(rightLetter)
        }
    });

    function calcUpperCasePosition(letter) {
        const code = letter.charCodeAt();
        return code - 64;
    }

    function calcLowerCasePosition(letter) {
        const code = letter.charCodeAt();
        return code - 96;
    }

    console.log(total.toFixed(2));
}


lettersChangeNumbers('a1A');