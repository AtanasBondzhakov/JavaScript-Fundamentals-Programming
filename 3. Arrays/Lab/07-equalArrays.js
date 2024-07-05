function equalArrays(arr1, arr2) {
    let sum = 0;
    let isIdentical = true;
    let indexDifference = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            indexDifference = i;
            isIdentical = false;
            break;
        }
    }

    if (isIdentical) {
        for (let num of arr1) {
            sum += Number(num);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDifference} index`);
    }
}
