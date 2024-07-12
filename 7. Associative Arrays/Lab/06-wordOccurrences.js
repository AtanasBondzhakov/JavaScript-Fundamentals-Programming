function wordOccurrences(arr) {
    const wordsList = {};

    for (const word of arr) {
        if (!wordsList.hasOwnProperty(word)) {
            wordsList[word] = 0;
        }
        
        wordsList[word]++;
    }

    const sortedWords = Object.entries(wordsList).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}