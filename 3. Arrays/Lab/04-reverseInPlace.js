function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let firstTemp = arr[i];
        let lastTemp = arr[arr.length - i - 1];
        arr[i] = lastTemp;
        arr[arr.length - i - 1] = firstTemp;
    }
    console.log(arr.join(' '));
}
