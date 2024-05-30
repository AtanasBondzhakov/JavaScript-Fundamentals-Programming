function primeNumberChecker(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime
}

console.log(primeNumberChecker(7)); //true
console.log(primeNumberChecker(8)); //false
console.log(primeNumberChecker(81)); //false