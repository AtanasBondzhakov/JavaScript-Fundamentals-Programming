function oddOccurrences(sentence) {
    const appearance = new Map();
    const result = [];

    const words = sentence.split(' ').map(w => w.toLowerCase());
    for (const word of words) {
        if (!appearance.has(word)) {
            appearance.set(word, 0);
        }

        appearance.set(word, appearance.get(word) + 1);
    }

    const filtered = Array.from(appearance).filter(x => x[1] % 2 !== 0);
    filtered.forEach(el => result.push(el[0]));

    console.log(result.join(' '));
}