function sumEvenNumbers(arr) {
    let sum = 0;

    for (let num of arr) {
        num = Number(num);
        if (num % 2 === 0) {
            sum += num
        }
    }

    console.log(sum);
}
