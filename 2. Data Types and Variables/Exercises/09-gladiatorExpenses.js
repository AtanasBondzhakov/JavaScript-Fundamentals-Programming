function gladiatorExpenses(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;

    for (let currentBattle = 1; currentBattle <= lostCount; currentBattle++) {
        if (currentBattle % 2 === 0) {
            totalExpenses += helmetPrice;
        }

        if (currentBattle % 3 === 0) {
            totalExpenses += swordPrice;
        }

        if (currentBattle % 6 === 0) {
            totalExpenses += shieldPrice;
        }

        if (currentBattle % 12 === 0) {
            totalExpenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
