function matchDates(data) {
    const pattern = /\b(?<day>\d{2})([\.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let matches = pattern.exec(data);

    while (matches !== null) {
        const day = matches[1];
        const month = matches[3];
        const year = matches[4];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        matches = pattern.exec(data);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);