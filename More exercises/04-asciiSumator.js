function asciiSumator(data) {
    const start = data.shift();
    const end = data.shift();
    const str = data.shift();

    const startCode = Math.min(start.charCodeAt(), end.charCodeAt());
    const endCode = Math.max(start.charCodeAt(), end.charCodeAt());

    let sum = 0;

    for (const char of str) {
        const code = char.charCodeAt();

        if (code > startCode && code < endCode) {
            sum += code;
        }
    }

    console.log(sum);
}

asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']


)