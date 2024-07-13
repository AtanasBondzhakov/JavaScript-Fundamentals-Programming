function aMinerTask(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const resource = arr[i];
        const quantity = Number(arr[i + 1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
        }

        result[resource] += quantity;
    }

    Object.entries(result).forEach(r => {
        console.log(`${r[0]} -> ${r[1]}`);
    })
}