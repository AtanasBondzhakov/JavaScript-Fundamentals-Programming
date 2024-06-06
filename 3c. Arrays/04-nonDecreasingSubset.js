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

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]); //1 3 8 10 12 24
nonDecreasingSubset([ 1, 2, 3, 4]); //1 2 3 4
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]); //20