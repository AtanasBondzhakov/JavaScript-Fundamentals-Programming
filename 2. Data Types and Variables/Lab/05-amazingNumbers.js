function amazingNumbers(num) {
    let numAsStr = num.toString();
    let sum = 0;
    let isAmazing = 'False';

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    let sumAsStr = sum.toString();

    for (let i = 0; i < sumAsStr.length; i++) {
        if (sumAsStr[i] === '9') {
            isAmazing = 'True';
            break;
        }
    }
    
    console.log(`${num} Amazing? ${isAmazing}`);
}
