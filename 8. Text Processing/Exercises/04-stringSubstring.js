function stringSubstring(word, text) {
    word = word.toLowerCase()
    text = text.toLowerCase().split(' ');
  
    if(text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
'JavaScript is the best programming language');