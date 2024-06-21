function memoryGame(data) {
    let sequence = data.shift()
        .split(' ');

    let moves = 0;

    let line = data.shift();

    while (line !== 'end') {
        moves++;

        const indexes = line.split(' ');
        const firstPosition = Number(indexes[0]);
        const secondPosition = Number(indexes[1]);

        const firstIndex = Math.min(firstPosition, secondPosition);
        const secondIndex = Math.max(firstPosition, secondPosition);

        const firstEl = sequence[firstIndex];

        if (firstIndex === secondIndex || firstIndex < 0 || secondIndex >= sequence.length) {
            let middleOfSequence = sequence.length / 2;
            sequence.splice(middleOfSequence, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');

        } else if (sequence[firstIndex] === sequence[secondIndex]) {
            sequence.splice(secondIndex, 1);
            sequence.splice(firstIndex, 1);
            console.log(`Congrats! You have found matching elements - ${firstEl}!`);

        } else {
            console.log('Try again!');
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        line = data.shift();
    }

    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    );