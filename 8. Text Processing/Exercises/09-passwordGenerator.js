function passwordGenerator(arr) {
    const firstWord = arr[0];
    const secondWord = arr[1];
    const thirdWord = arr[2].toUpperCase();
    let concatenated = firstWord + secondWord;

    const vowels = ['a', 'o', 'u', 'i', 'e'];
    let count = 0;

    for (let i = 0; i < concatenated.length; i++) {
        let currChar = concatenated[i];

        if (vowels.includes(currChar)) {
            concatenated = concatenated.replace(concatenated[i], thirdWord[count]);
            count++;
        }

        if (count === thirdWord.length) {
            count = 0;
        }
    }

    const password = concatenated.split('').reverse().join('')

    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])