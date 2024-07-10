function flightSchedule(data) {
    const initialFlights = data.shift();
    const changedStatuses = data.shift();
    const targetStatus = data.shift()[0];

    const flightsList = {};

    initialFlights.forEach(flight => {
        const [flightNumber, destination] = flight.split(' ');
        flightsList[flightNumber] = { Destination: destination, Status: 'Ready to fly' };
    });

    for (let flight of changedStatuses) {
        const [flightNumber, newStatus] = flight.split(' ');

        if (flightsList.hasOwnProperty(flightNumber)) {
            flightsList[flightNumber].Status = newStatus;
        }
    }

    const entries = Object.entries(flightsList);
    let result = [];
    
    if (targetStatus === 'Ready to fly') {
        result = entries.filter(f => f[1].Status === 'Ready to fly');

    } else {
        result = entries.filter(f => f[1].Status === targetStatus);
    }

    result.forEach(f => console.log(f[1]))
}