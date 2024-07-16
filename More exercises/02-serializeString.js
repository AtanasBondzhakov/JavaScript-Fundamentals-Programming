function serializeString(arr) {
    const str = arr[0];

    const result = {};

    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];

        if (!result.hasOwnProperty(currChar)) {
            result[currChar] = [i];
        } else {
            result[currChar].push(i);
        }
    }

    for (const key in result) {
        console.log(`${key}:${result[key].join('/')}`);
    }
}

serializeString(["avjavamsdmcalsdm"])