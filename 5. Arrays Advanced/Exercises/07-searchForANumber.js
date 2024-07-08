function searchForANumber(numbers, data) {
    const [count, deletion, searched] = data;

    let result = numbers.slice(0, count);
    result.splice(0, deletion)
    const occurrences = result.filter((x) => x === searched).length;

    console.log(`Number ${searched} occurs ${occurrences} times.`);
}
