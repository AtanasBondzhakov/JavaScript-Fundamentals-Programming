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

maxNumber([1, 4, 3, 2]); //4 3 2
maxNumber([14, 24, 3, 19, 15, 17]); //24 19 17
maxNumber([27, 19, 42, 2, 13, 45, 48]); //48