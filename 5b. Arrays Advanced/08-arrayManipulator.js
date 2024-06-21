function arrayManipulator(integers, commands) {
    for (let command of commands) {
        const tokens = command.split(' ');
        const action = tokens.shift();
        const value = Number(tokens.shift());

        if (action === 'add') {
            const el = Number(tokens[0]);
            integers.splice(value, 0, el);

        } else if (action === 'addMany') {
            let index = value;
            for (let el of tokens) {
                integers.splice(index, 0, Number(el));
                index++;
            }

        } else if (action === 'contains') {
            const index = integers.indexOf(value);
            console.log(index);

        } else if (action === 'remove') {
            integers.splice(value, 1);

        } else if (action === 'shift') {
            for (let i = 0; i < value; i++) {
                integers.push(integers.shift());
            }

        } else if (action === 'sumPairs') {
            const result = [];

            for (let i = 0; i < integers.length; i += 2) {
                let currentSum = 0
                if (i + 1 < integers.length) {
                    currentSum = integers[i] + integers[i + 1];
                } else {
                    currentSum = integers[i];
                }
                result.push(currentSum);
            }
            
            integers = result;

        } else if (action === 'print') {
            console.log(`[ ${integers.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
);