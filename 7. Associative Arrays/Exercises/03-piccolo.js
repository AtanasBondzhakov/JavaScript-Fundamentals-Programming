function piccolo(data) {
    const parking = {};

    for (const command of data) {
        const [direction, carNumber] = command.split(', ');

        if (direction === 'IN') {
            parking[carNumber] = true;
        } else if (direction === 'OUT') {
            parking[carNumber] = false;
        }
    }

    const result = Object.entries(parking)
        .filter(x => x[1] === true)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => x = x[0]);

    if (result.length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    
    console.log(result.join('\n'));
}