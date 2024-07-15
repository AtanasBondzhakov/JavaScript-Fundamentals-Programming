function pascalCaseSplitter(str) {
    let state = str[0];
    let result = [];

    for (let i = 1; i < str.length; i++)  {
        let currChar = str[i];
        if(currChar.toLowerCase() === currChar) {
            state += currChar;
        } else {
            result.push(state);
            state = '';
            state += currChar
        }
    }
    result.push(state)

    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');