function distinctArray(data) {
    const result = [];

    for (let num of data) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    console.log(result.join(' '));
}

distinctArray([1, 2, 3, 4]); //1 2 3 4
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]); //7 8 9 2 3 4 1
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]); //20 8 12 13 4 5