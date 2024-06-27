function arrayModifier(data) {
    let arrOfInt = data.shift()
        .split(' ')
        .map(Number);

    let command = data.shift();

    while (command !== 'end') {
        let [action, firstIndex, secondIndex] = command.split(' ');
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (action === 'swap') {
            let temp = arrOfInt[firstIndex];
            arrOfInt[firstIndex] = arrOfInt[secondIndex];
            arrOfInt[secondIndex] = temp;

        } else if (action === 'multiply') {
            let firstNum = arrOfInt[firstIndex];
            const secondNum = arrOfInt[secondIndex];
            firstNum *= secondNum;
            arrOfInt[firstIndex] = firstNum;

        } else if (action === 'decrease') {
            arrOfInt = arrOfInt.map(el => el -= 1);
        }

        command = data.shift();
    }

    console.log(arrOfInt.join(', '));
}