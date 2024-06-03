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

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']); //22 - 1522 - 110 - 5636 - 46
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']); //35 - 12312333 - 10 - 77122 - 48