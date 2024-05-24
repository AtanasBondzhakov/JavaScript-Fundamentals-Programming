function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let numAsStr = i.toString();
        let digitSum = 0;
        let isSpecial = 'False';

        for (let j = 0; j < numAsStr.length; j++) {
            let currentDigit = Number(numAsStr[j]);
            digitSum += currentDigit;
        }
        
        if (digitSum === 5 || digitSum === 7 || digitSum === 11) {
            isSpecial = 'True';
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}

specialNumbers(15); 
//1 -> False
//2 -> False
//3 -> False
//4 -> False
//5 -> True
//6 -> False
//7 -> True
//8 -> False
//9 -> False
//10 -> False
//11 -> False
//12 -> False
//13 -> False
//14 -> True
//15 -> False

