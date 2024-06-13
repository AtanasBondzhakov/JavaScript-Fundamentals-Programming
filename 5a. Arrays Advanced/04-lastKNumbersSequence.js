function lastKNumbersSequence(n, k) {
    const result = [1];

    for (let i = 1; i < n; i++) {
        const current = result.slice(-k);

        let sum = 0;

        for (let num of current) {
            sum += num;
        }

        result.push(sum)
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3); //1 1 2 4 7 13
lastKNumbersSequence(8, 2); //1 1 2 3 5 8 13 21