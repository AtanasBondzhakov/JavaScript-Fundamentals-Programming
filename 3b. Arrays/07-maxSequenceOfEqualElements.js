function maxSequenceOfEqualElements(arr) {
    let currentSequence = [arr[0]];
    let maxSequence = [];

    for (let i = 1; i < arr.length; i++) {
        let currentNum = arr[i];

        if (currentNum === currentSequence[0]) {
            currentSequence.push(currentNum);

            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }

        } else {
            currentSequence = [currentNum];
        }
    }

    console.log(maxSequence.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); //2 2 2
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]); //1 1 1
maxSequenceOfEqualElements([4, 4, 4, 4]); //4 4 4 4
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]); //1 1