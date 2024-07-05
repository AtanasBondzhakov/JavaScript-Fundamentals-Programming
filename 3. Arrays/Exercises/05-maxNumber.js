function maxNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isMaxNumber = true;

        for (let j = i + 1; j < arr.length; j++) {
            let numToRight = arr[j];
            if (currentNum <= numToRight) {
                isMaxNumber = false;
                break;
            }
        }

        if (isMaxNumber) {
            result.push(currentNum);
        }
    }

    console.log(result.join(' '));
}
