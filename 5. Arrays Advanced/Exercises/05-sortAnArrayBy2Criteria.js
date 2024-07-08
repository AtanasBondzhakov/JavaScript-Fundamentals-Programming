function sortAnArrayBy2Criteria(data) {
    const sortedData = data.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedData.join('\n'));
}
