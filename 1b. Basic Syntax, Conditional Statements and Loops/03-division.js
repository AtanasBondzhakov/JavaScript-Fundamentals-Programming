function division(num) {
    let divisionNum = 0
    if (num % 10 === 0) {
        divisionNum = 10;
    } else if (num % 7 === 0) {
        divisionNum = 7;
    } else if (num % 6 === 0) {
        divisionNum = 6;
    } else if (num % 3 === 0) {
        divisionNum = 3;
    } else if (num % 2 === 0) {
        divisionNum = 2;
    }

    if (divisionNum === 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divisionNum}`);
    }
}

division(30);
division(15);
division(12);
division(1643);