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

integerAndFloat(9, 100, 1.1); //110.1 - Float
integerAndFloat(100, 200, 303); //603 - Integer
