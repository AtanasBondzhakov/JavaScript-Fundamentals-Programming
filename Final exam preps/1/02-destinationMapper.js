function destinationMapper(text) {
    const pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let matches = pattern.exec(text);
    let destinations = [];

    let travelPoints = 0;

    while (matches !== null) {
        destinations.push(matches[0]);
        matches = pattern.exec(text);
    }

    destinations = destinations.map(d => d.slice(1, d.length - 1));
    destinations.forEach(d => travelPoints += d.length);

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper('ThisIs some InvalidInput');