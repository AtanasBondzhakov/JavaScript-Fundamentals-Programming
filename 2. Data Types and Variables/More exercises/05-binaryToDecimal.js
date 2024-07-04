function binaryToDecimal(binaryAsStr) {
    let length = binaryAsStr.length;
    let sum = 0;

    for (let i = 0; i < binaryAsStr.length; i++) {
        length--;
        sum += binaryAsStr[i] * 2 ** length;
    }
    console.log(sum);
}
