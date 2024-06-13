function sumFirstAndLast(arr) {
    const firstNum = Number(arr.shift());
    const lastNum = Number(arr.pop());

    const result = firstNum + lastNum;
    console.log(result);
}

sumFirstAndLast(['20', '30', '40']); //60
sumFirstAndLast(['5', '10']); //15