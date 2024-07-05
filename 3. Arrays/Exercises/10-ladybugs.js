function ladybugs(input) {
    let fieldSize = input[0];
    let ladybugsIndices = input[1].split(' ').map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        if (ladybugsIndices.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < input.length; j++) {
        let command = input[j];
        let tokens = command.split(' ');
        let ladybugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIndex]) {
            continue;
        }

        field[ladybugIndex] = 0;

        if (direction === 'left') {
            let newIndex = ladybugIndex - flyLength;

            while (field[newIndex] === 1) {
                newIndex -= flyLength;
            }

            if (newIndex >= 0) {
                field[newIndex] = 1;
            }

        } else {
            let newIndex = ladybugIndex + flyLength;

            while (field[newIndex] === 1) {
                newIndex += flyLength;
            }

            if (newIndex < field.length) {
                field[newIndex] = 1;
            }
        }
    }
    console.log(field.join(' '));
}
