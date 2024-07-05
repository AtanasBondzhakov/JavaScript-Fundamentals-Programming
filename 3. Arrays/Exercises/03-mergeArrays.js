function mergeArrays(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let firstEl = arr1[i];
        let secondEl = arr2[i];

        if (i % 2 === 0) {
            result.push(Number(firstEl) + Number(secondEl));
        } else {
            result.push(firstEl + secondEl);
        }
    }

    console.log(result.join(' - '));
}
