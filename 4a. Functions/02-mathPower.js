function mathPower(num, power) {
    let sum = 1;

    for (let i = 1; i <= power; i++) {
        sum *= num;
    }

    console.log(sum);
}

mathPower(2, 8); //256
mathPower(3, 4); //81