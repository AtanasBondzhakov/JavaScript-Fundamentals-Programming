function evenAndOddSubtraction(arr) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            sumOfEven += Number(arr[i]);
        } else {
            sumOfOdd += Number(arr[i]);
        }
    }

    let result = sumOfEven - sumOfOdd;
    console.log(result);
}
