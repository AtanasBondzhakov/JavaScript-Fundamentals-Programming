function theHuntingGames(data) {
    data = data.map(Number);
    let days = data.shift();
    let playersCount = data.shift();
    let energy = data.shift();
    let waterPerDayPerPerson = data.shift();
    let foodPerDayPerPerson = data.shift();
    let energyLoss = data.shift();

    let totalWater = playersCount * waterPerDayPerPerson * days;
    let totalFood = playersCount * foodPerDayPerPerson * days;

    for (let i = 1; i <= days; i++) {

        energy -= energyLoss;
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (i % 2 === 0) {
            energy *= 1.05;
            totalWater *= 0.7;
        }

        if (i % 3 === 0) {
            totalFood -= totalFood / playersCount;
            energy *= 1.1;
        }

        energyLoss = data.shift();
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}