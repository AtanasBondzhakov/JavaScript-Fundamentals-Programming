function wordsTracker(arr) {
    const trackedWords = arr.shift().split(' ');
    const wordsList = {};

    trackedWords.forEach(w => { wordsList[w] = 0 });
    for (const word of arr) {
        if (wordsList.hasOwnProperty(word)) {
            wordsList[word]++;
        }
    }

    const sortedWords = Object.entries(wordsList).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(el => {
        const [word, count] = el;
        console.log(`${word} - ${count}`);
    });
}
