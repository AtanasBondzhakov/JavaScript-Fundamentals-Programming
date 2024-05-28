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

gladiatorExpenses(7, 2, 3, 4, 5); //Gladiator expenses: 16.00 aureus
gladiatorExpenses(23, 12.50, 21.50, 40, 200); //Gladiator expenses: 608.00 aureus