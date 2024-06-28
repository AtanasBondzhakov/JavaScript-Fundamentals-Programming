function movingTarget(data) {
    let targets = data.shift()
        .split(' ')
        .map(Number);
    let command = data.shift();

    while (command !== 'End') {
        let [action, index, value] = command.split(' ');
        index = Number(index);
        value = Number(value);

        if (action === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

        } else if (action === 'Add') {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }

        } else if (action === 'Strike') {
            const startIndex = index - value;
            const endIndex = index + value;
            const range = value * 2 + 1;

            if (startIndex < 0 || endIndex >= targets.length) {
                console.log('Strike missed!');
                command = data.shift();
                continue;
            } else {
                targets.splice(startIndex, range)
            }
        }

        command = data.shift();
    }
    console.log(targets.join('|'));
}