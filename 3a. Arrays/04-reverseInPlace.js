function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let firstTemp = arr[i];
        let lastTemp = arr[arr.length - i - 1];
        arr[i] = lastTemp;
        arr[arr.length - i - 1] = firstTemp;
    }
    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']); //e d c b a
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']); //nop klm hig def abc
reverseInPlace(['33', '123', '0', 'dd']); //dd 0 123 33