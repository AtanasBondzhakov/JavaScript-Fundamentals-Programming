function softUniBarIncome(data) {
    const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*\$)/;
    let line = data.shift();

    let totalIncome = 0

    while (line !== 'end of shift') {
        const match = pattern.exec(line);

        if (match) {
            let { name, product, count, price } = match.groups;
            count = Number(count);
            price = Number(price.split('$')[0]);
            const cost = count * price;
            totalIncome += cost;

            console.log(`${name}: ${product} - ${cost.toFixed(2)}`);
        }
        
        line = data.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}