function distinctArray(data) {
    const result = [];

    for (let num of data) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}
