function spiceMustFlow(initialYield) {
    let totalSpices = 0;
    let days = 0;

    while (initialYield >= 100) {
        days++;
        totalSpices += initialYield - 26;
        initialYield -= 10;
    }

    totalSpices -= 26;

    if (totalSpices < 0) {
        totalSpices = 0;
    }

    console.log(days);
    console.log(totalSpices);
}
