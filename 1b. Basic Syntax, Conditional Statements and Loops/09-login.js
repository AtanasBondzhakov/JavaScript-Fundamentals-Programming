function login(arr) {
    let username = arr[0];
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
        let currentPass = arr[i];
        let reversedPass = '';
        for (let j = currentPass.length - 1; j >= 0; j--) {
            let currChar = currentPass[j];
            reversedPass += currChar;
        }

        if (username === reversedPass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            counter++;
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}

// login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);