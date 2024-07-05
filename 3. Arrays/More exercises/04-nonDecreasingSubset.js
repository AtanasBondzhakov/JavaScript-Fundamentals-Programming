function nonDecreasingSubset(arr) {
    const result = [];
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (const num of arr) {
        if (num >= biggestNum) {
            biggestNum = num;
            result.push(biggestNum);
        }
    }
    
    console.log(result.join(' '));
}
