function furniture(data) {
    const pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<qty>\d+)/g;
    let match = pattern.exec(data);

    const furnitureList = [];
    let totalCost = 0;

    while (match !== null) {
        const furniture = match[1];
        const price = Number(match[2]);
        const qty = Number(match[3]);

        furnitureList.push(furniture);
        totalCost += price * qty;

        match = pattern.exec(data);
    }

    console.log('Bought furniture:');
    furnitureList.forEach(f => console.log(f));
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}