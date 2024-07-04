function biggestOf3Numbers(numA, numB, numC) {
    let biggestNum = 0;

    if(numA > numB && numA > numC) {
        biggestNum = numA;
    } else if (numB > numA && numB > numC) {
        biggestNum = numB;
    } else if (numC > numA && numC > numB) {
        biggestNum = numC;
    } else {
        biggestNum = numA;
    }

    console.log(biggestNum);
}
