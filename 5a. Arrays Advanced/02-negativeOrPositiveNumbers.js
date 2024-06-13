function negativeOrPositiveNumbers(arr) {
    const result = [];

    for (let el of arr) {
        if (Number(el) < 0) {
            result.unshift(Number(el));
        } else {
            result.push(Number(el));
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']); //-2 7 8 9
negativeOrPositiveNumbers(['3', '-2', '0', '-1']); //-1 -2 3 0