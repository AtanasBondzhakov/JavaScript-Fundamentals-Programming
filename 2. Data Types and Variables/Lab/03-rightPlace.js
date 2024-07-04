function rightPlace(str, char, replacer) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if(currentChar === '_') {
            result += char;
        } else {
            result += currentChar;
        }
    }
    
    result === replacer ? console.log('Matched') : console.log('Not Matched');
}
