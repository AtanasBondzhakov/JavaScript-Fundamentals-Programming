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

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]); //3
evenAndOddSubtraction([3, 5, 7, 9]); //-24
evenAndOddSubtraction([2, 4, 6, 8, 10]); //30