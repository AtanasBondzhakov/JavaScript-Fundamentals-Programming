function makeADictionary(data) {
    const dictionary = {};

    for (let line of data) {
        let description = JSON.parse(line)
        const term = Object.keys(description);
        const definition = Object.values(description);
        dictionary[term] = definition;
    }

    const sortedDictionary = Object.keys(dictionary)
        .sort((a,b) => a.localeCompare(b))
    sortedDictionary.forEach(el => {
        console.log(`Term: ${el} => Definition: ${dictionary[el]}`);
    })
}
