function searchForANumber(numbers, data) {
    const [count, deletion, searched] = data;

    let result = numbers.slice(0, count);
    result.splice(0, deletion)
    const occurrences = result.filter((x) => x === searched).length;

    console.log(`Number ${searched} occurs ${occurrences} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]); //Number 3 occurs 1 times.
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]); //Number 5 occurs 1 times.