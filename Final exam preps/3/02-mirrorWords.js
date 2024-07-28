function mirrorWords(arr) {
    const text = arr.shift();
    const pattern = /([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let pairs = 0;
    const mirrors = [];

    let match = pattern.exec(text)

    while (match !== null) {
        pairs++;
        const firstWord = match.groups.first;
        let secondWord = match.groups.second;

        const reversedSecond = secondWord.split('').reverse().join('');

        if (firstWord === reversedSecond) {
            mirrors.push(`${firstWord} <=> ${secondWord}`);
        }

        match = pattern.exec(text);
    }

    if (pairs > 0) {
        console.log(`${pairs} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (mirrors.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrors.join(', '));
    }
}