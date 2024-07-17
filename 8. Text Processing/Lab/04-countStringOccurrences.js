function countStringOccurrences(text, word) {
    let counter = 0;

    text.split(' ').forEach(w => {
        if (w === word) {
            counter++;
        }
    });

    console.log(counter);
}