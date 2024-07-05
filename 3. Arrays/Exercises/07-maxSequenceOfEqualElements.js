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
