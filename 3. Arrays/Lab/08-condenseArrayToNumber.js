function condenseArrayToNumber(arr) {
    let result = [];

    while (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i++) {
            let currentSum = arr[i] + arr[i + 1];
            result.push(currentSum);
        }
        arr = result;
        result = [];
    }

    console.log(arr.join(''));
}
