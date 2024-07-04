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
