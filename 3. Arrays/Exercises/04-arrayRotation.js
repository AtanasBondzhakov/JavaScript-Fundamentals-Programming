function arrayRotation(arr, rotationsCount) {
    for (let i = 1; i <= rotationsCount; i++) {
        let currentEl = arr.shift();
        arr.push(currentEl);
    }

    console.log(arr.join(' '));
}
