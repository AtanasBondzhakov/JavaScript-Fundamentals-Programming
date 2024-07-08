function sumFirstAndLast(arr) {
    const firstNum = Number(arr.shift());
    const lastNum = Number(arr.pop());

    const result = firstNum + lastNum;
    console.log(result);
}
