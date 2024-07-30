function needForSpeedIII(arr) {
    const carsCount = Number(arr.shift());
    const garage = {};

    for (let i = 1; i <= carsCount; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        garage[car] = { mileage, fuel };
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        let [action, car, ...params] = command.split(' : ');

        if (action === 'Drive') {
            const distance = Number(params.shift());
            const fuel = Number(params.shift());

            if (garage[car].fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                garage[car].mileage += distance;
                garage[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (garage[car].mileage >= 100000) {
                delete garage[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (action === 'Refuel') {
            let fuel = Number(params.shift());
            if(garage[car].fuel + fuel > 75) {
                fuel = 75 - garage[car].fuel;
                garage[car].fuel = 75;
            } else {
                garage[car].fuel += fuel;
            }
            console.log(`${car} refueled with ${fuel} liters`);

        } else if (action === 'Revert') {
            const kilometers = Number(params.shift());

            if (garage[car].mileage - kilometers < 10000) {
                garage[car].mileage = 10000;
            } else {
                garage[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    
        command = arr.shift();
    }

    for (let car in garage) {
        console.log(`${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`);
    }
}