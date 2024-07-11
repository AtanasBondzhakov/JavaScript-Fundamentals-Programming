function sequences(JSONdata) {
    const data = JSONdata
        .map(el => JSON.parse(el));

    data.forEach(el => {
        el.sort((a, b) => a - b);
    });


    const uniques = [];

    for (let i = 0; i < data.length; i++) {
        const currentArr = data[i];
        let isUnique = true;

        for (let j = 0; j < uniques.length; j++) {
            let nextArr = uniques[j];

            if (currentArr.toString() === nextArr.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniques.push(currentArr);
        }
    }

    uniques.sort((a, b) => a.length - b.length);
    uniques.forEach(el => { console.log(`[${el.reverse().join(', ')}]`) });
}