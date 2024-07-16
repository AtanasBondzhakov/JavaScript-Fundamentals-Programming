function treasureFinder(data) {
    const key = data.shift().split(' ');
    let strLine = data.shift();

    while (strLine !== 'find') {
        let result = '';
        let index = 0;

        for (const char of strLine) {
            const code = char.charCodeAt();
            if (index === key.length) {
                index = 0;
            }

            const updatedChar = String.fromCharCode(code - key[index]);
            result += updatedChar;
            index++;
        }
        
        const treasureType = result.split('&')[1];
        let coordinates = result.split('<')[1]
        coordinates = coordinates.substring(0, coordinates.length - 1);

        console.log(`Found ${treasureType} at ${coordinates}`);

        strLine = data.shift();
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]
)