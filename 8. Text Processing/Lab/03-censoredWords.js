function censoredWords(text, replacer) {
    while (text.includes(replacer)) {
        text = text.replace(replacer, '*'.repeat(replacer.length))
    }

    console.log(text);
}

censoredWords('Find the hidden word hidden', 'hidden')