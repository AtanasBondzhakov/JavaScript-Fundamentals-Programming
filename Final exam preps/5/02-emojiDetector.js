function emojiDetector([text]) {
    const pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    const digitPattern = /[0-9]/g;
    let coolThreshold = 1;
    let validEmojis = 0;
    const coolEmojis = [];

    let digitMatch = text.match(digitPattern);
    let match = pattern.exec(text);

    if (digitMatch) {
        for (let digit of digitMatch) {
            coolThreshold *= Number(digit)
        }
    }

    while (match !== null) {
        let coolness = 0;
        const rawWord = match[0];
        const word = match[2];
        validEmojis++;

        for (let char of word) {
            const code = char.charCodeAt();
            coolness += code;
        }

        if (coolness > coolThreshold) {
            coolEmojis.push(rawWord);
        }

        match = pattern.exec(text);
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojis} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}