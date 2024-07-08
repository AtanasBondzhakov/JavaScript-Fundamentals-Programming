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
