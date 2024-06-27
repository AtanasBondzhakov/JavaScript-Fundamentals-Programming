function numbers(data) {
    let sequence = data.split(' ')
        .map(Number);

    const sumOfSequence = sequence.reduce((acc, val) => acc + val, 0);
    const averageValue = sumOfSequence / sequence.length

    sequence.sort((a, b) => b - a);
    const result = sequence.filter(num => num > averageValue);

    if (result.length === 0) {
        console.log('No');
    } else {
        console.log(result.slice(0, 5).join(' '));
    }
}