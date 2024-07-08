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
