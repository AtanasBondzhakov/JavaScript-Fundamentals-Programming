function race(data) {
    const participants = data.shift().split(', ');
    let command = data.shift();

    const persons = {};
    const namePattern = /[A-Za-z]/g;
    const distancePattern = /\d/g;

    participants.forEach(p => persons[p] = 0);

    while (command !== 'end of race') {
        const currentName = command.match(namePattern).join('');
        const currentDigits = command.match(distancePattern).map(Number);
        const currentDistance = currentDigits.reduce((acc, val) => acc + val, 0);

        if (persons.hasOwnProperty(currentName)) {
            persons[currentName] += currentDistance;
        }

        command = data.shift();
    }

    const sortedResults = Object.entries(persons).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);
}