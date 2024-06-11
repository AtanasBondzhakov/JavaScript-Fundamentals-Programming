function carWash(commands) {
    let cleanliness = 0;

    const soap = () => cleanliness += 10;
    const water = () => cleanliness *= 1.2;
    const vacuumCleaner = () => cleanliness *= 1.25;
    const mud = () => cleanliness *= 0.9;

    for (let command of commands) {
        if (command === 'soap') {
            soap();
        } else if (command === 'water') {
            water();
        } else if (command === 'vacuum cleaner') {
            vacuumCleaner();
        } else if (command === 'mud') {
            mud();
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); //The car is 39.00% clean.
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]); //The car is 13.12% clean.