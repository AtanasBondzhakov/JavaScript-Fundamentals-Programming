function addAndSubtract(arr) {
    let result = [];
    let sumInitialArr = 0;
    let sumResultArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sumInitialArr += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        sumResultArr += currentNum;
        result.push(currentNum);
    }

    console.log(result);
    console.log(sumInitialArr);
    console.log(sumResultArr);
}

addAndSubtract([5, 15, 23, 56, 35]); //[ 5, 14, 21, 59, 31 ], 134, 130
addAndSubtract([-5, 11, 3, 0, 2]); //[ -5, 10, 1, 3, 6 ], 11, 15