function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let buff = '';
        for (let j = 1; j <= i; j++) {
            buff += i + ' ';
        }
        console.log(buff);
    }
}

triangleOfNumbers(3); //1
                      //2 2 
                      //3 3 3
