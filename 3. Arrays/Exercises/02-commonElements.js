function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentStr = arr1[i]
        if (arr2.includes(currentStr)) {
            console.log(currentStr);
        }
    }
}
