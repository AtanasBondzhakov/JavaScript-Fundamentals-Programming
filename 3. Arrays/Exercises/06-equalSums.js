function equalSums(arr) {
    let isEqual = false;
    let indexOfEqual = 0;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            isEqual = true;
            indexOfEqual = i;
        }
    }

    if (isEqual) {
        console.log(indexOfEqual);
    } else {
        console.log('no');
    }
}
