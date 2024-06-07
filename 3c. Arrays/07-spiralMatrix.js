function spiralMatrix(rows, cols) {
    let counter = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let result = [];

    for (let i = 0; i < rows; i++) {
        result.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    result = result.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5); //1 2 3 4 5
                    //16 17 18 19 6
                    //15 24 25 20 7
                    //14 23 22 21 8
                    //13 12 11 10 9

