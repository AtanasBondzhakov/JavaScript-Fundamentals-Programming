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
