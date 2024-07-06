function charactersInRange(firstChar, secondChar) {
    const code1 = firstChar.charCodeAt();
    const code2 = secondChar.charCodeAt();
    const startCode = Math.min(code1, code2);
    const endCode = Math.max(code1, code2);
    const result = [];

    for (let currentCode = startCode + 1; currentCode < endCode; currentCode++) {
        const currentChar = String.fromCharCode(currentCode);
        result.push(currentChar);
    }

    console.log(result.join(' '));
}
