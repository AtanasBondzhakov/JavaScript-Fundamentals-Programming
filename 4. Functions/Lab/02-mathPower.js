function mathPower(num, power) {
    let sum = 1;

    for (let i = 1; i <= power; i++) {
        sum *= num;
    }

    console.log(sum);
}
