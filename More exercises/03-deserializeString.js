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

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']

)