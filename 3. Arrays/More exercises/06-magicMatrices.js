function magicMatrices(matrix) {

    function sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }

    let targetSum = sum(matrix[0]);
    let isMagic = true;

    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = sum(matrix[i]);
        let currentColSum = matrix.map(row => row[i]);
        currentColSum = sum(currentColSum);

        if (currentRowSum !== targetSum || currentColSum !== targetSum) {
            isMagic = false;
            break;
        }
    }
    isMagic === true ? console.log(true) : console.log(false);
}
