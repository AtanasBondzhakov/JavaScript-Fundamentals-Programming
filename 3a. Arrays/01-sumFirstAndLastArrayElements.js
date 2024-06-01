function sumFirstAndLastArrayElements(numbers) {
    const firstNum = numbers[0];
    const lastNum = numbers[numbers.length - 1];
    const sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]); //60
sumFirstAndLastArrayElements([10, 17, 22, 33]); //43
sumFirstAndLastArrayElements([11, 58, 69]); //80