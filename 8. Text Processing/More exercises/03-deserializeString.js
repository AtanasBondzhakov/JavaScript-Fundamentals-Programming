function deserializeString(data) {
    let line = data.shift();

    let obj = {};
    let result = '';

    while (line !== 'end') {
        let [letter, indexes] = line.split(':');
        indexes = indexes.split('/')
            .map(Number);

        for (const index of indexes) {
            obj[index] = letter;
        }

        line = data.shift();
    }

    for (const key in obj) {
        result += obj[key];
    }

    console.log(result);
}