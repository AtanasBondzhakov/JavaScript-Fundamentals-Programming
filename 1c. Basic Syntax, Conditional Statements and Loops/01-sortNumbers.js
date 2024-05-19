function sortNumbers(numA, numB, numC) {
    let max = 0;
    let mid = 0;
    let min = 0;

    if (numA > numB && numA > numC) {
        max = numA;
        if (numB > numC) {
            mid = numB;
            min = numC;
        } else {
            mid = numC;
            min = numB;
        }
    } else if (numB > numA && numB > numC) {
        max = numB;
        if (numA > numC) {
            mid = numA;
            min = numC;
        } else {
            mid = numC;
            min = numA;
        }
    } else if (numC > numA && numC > numB) {
        max = numC;
        if (numA > numB) {
            mid = numA;
            min = numB;
        } else {
            mid = numB;
            min = numA;
        }
    }

    console.log(max);
    console.log(mid);
    console.log(min);
}