function blackFlag(input) {
    let [daysPlunder, dailyPlunder, expectedPlunder] = input;
    daysPlunder = Number(daysPlunder);
    dailyPlunder = Number(dailyPlunder);
    expectedPlunder = Number(expectedPlunder);

    let totalPlunder = 0;

    for (let i = 1; i <= daysPlunder; i++) {
        let currentDay = i;

        totalPlunder += dailyPlunder;
        if (currentDay % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }

        if (currentDay % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentagePlunder = totalPlunder / expectedPlunder * 100
        console.log(`Collected only ${percentagePlunder.toFixed(2)}% of the plunder.`);
    }
}