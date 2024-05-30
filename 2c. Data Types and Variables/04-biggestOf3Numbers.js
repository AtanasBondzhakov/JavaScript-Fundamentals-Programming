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

biggestOf3Numbers(-2, 7, 3); //7
biggestOf3Numbers(130, 5, 99); //130
biggestOf3Numbers(43, 43.2, 43.1); //43.2
biggestOf3Numbers(2, 2, 2); //2