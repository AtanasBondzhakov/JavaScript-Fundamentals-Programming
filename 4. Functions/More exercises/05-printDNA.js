function printDNA(count) {
    let helixArr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let starsArr = [2, 1, 0, 1];
    let dashesArr = [0, 2, 4, 2]

    for (let i = 1; i <= count; i++) {
        let firstChar = helixArr.shift();
        let secondChar = helixArr.shift();
        let starsCount = starsArr.shift();
        let dashesCount = dashesArr.shift();

        print(firstChar, secondChar, starsCount, dashesCount);

        helixArr.push(firstChar, secondChar);
        starsArr.push(starsCount);
        dashesArr.push(dashesCount);
    }

    function print(char1, char2, stars,dashes) {
        const star = '*'.repeat(stars)
        const dash = '-'.repeat(dashes);
        console.log(`${star}${char1}${dash}${char2}${star}`);
    }
}
