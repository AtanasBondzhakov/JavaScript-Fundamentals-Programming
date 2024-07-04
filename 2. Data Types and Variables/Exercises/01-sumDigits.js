function sumDigits(num) {
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let currentDigit = numAsStr[i];
        sum += Number(currentDigit);
    }
    
    console.log(sum);
}
