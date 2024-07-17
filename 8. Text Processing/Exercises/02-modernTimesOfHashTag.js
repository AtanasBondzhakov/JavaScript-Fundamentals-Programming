function modernTimesOfHashTag(text) {
    const arr = text.split(' ');

    for (const word of arr) {
        if (word.startsWith('#') && word.length > 1) {
            let isValid = true;

            for (const char of word) {
                if (!isNaN(char)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(word.substring(1));
            }
        }
    }
}