function sortAnArrayBy2Criteria(data) {
    const sortedData = data.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedData.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);