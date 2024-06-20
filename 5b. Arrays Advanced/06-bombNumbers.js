function bombNumbers(sequence, bomb) {
    const [bombNum, bombPower] = bomb;
    let sum = 0;

    while (sequence.includes(bombNum)) {
        const bombIndex = sequence.indexOf(bombNum);
        let startIndex = bombIndex - bombPower;
        const damaged = bombPower * 2 + 1;


        sequence.splice(Math.max(0, startIndex), damaged);
    }

    sum = sequence.reduce((acc, val) => acc + val, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); //12
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]); //5
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]); //6