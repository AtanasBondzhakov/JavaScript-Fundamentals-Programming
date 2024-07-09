function diagonalsAttack(data) {
    let matrix = data.map(
        row => row.split(' ').map(Number));

    let sumFirstDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
    }
    
    let sumSecondDiagonal = 0;
    for (let j = 0; j < matrix.length; j++) {
        sumSecondDiagonal += matrix[j][matrix.length - 1 - j];
    }

    if (sumFirstDiagonal == sumSecondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i != j && i != matrix.length - 1 - j) {
                    matrix[i][j] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}
