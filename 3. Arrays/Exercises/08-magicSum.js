function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let secondNum = arr[j];

            if (curNum + secondNum === num) {
                console.log(`${curNum} ${secondNum}`);
            }
        }
    }
}
