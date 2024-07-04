function integerAndFloat(numA, numB, numC) {
    let sum = numA + numB + numC;
    let type = '';

    if (sum === Math.floor(sum)) {
        type = 'Integer';
    } else {
        type = 'Float'
    }
    
    console.log(`${sum} - ${type}`);
}
