function revealWords(words, text) {
    const wordsArr = words.split(', ');

    for (const word of wordsArr) {
        const template = '*'.repeat(word.length);
        text = text.replace(template, word);
    }
    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)