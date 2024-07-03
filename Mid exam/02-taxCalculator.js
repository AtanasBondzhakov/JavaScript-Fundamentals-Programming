function taxCalculator(data) {
    let vehicles = data.shift().split('>>');
    let totalTaxes = 0;

    for (let car of vehicles) {
        let tokens = car.split(' ');
        const type = tokens[0];
        const years = Number(tokens[1]);
        const kilometers = Number(tokens[2]);

        let currentTax = 0;

        if (type === 'family') {
            currentTax = 50 - years * 5;
            let timesReached3000Km = Math.floor(kilometers / 3000);
            currentTax += timesReached3000Km * 12;

        } else if (type === 'heavyDuty') {
            currentTax = 80 - years * 8;
            let timesReached9000Km = Math.floor(kilometers / 9000);
            currentTax += timesReached9000Km * 14;
        } else if (type === 'sports') {
            currentTax += 100 - years * 9;
            let timesReached2000Km = Math.floor(kilometers / 2000);
            currentTax += timesReached2000Km * 18
        } else {
            console.log('Invalid car type.');
            continue;
        }

        totalTaxes += currentTax;
        console.log(`A ${type} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
    }
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}