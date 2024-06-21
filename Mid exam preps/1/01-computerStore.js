function computerStore(data) {
    let currentCommand = data.shift();
    let totalNoTaxes = 0;

    while (currentCommand !== 'special' && currentCommand !== 'regular') {
        const price = Number(currentCommand)
        
        if (price <= 0) {
            console.log('Invalid price!');
            currentCommand = data.shift();
            continue;
        }
        
        totalNoTaxes += price;
        currentCommand = data.shift();
    }

    if (totalNoTaxes === 0) {
        console.log('Invalid order!');
        return;
    }

    const taxes = totalNoTaxes * 0.2;
    let totalWithTaxes = totalNoTaxes + taxes;

    if (currentCommand === 'special') {
        totalWithTaxes *= 0.9;
    }

    const resultMessage = [
        'Congratulations you\'ve just bought a new computer!',
        `Price without taxes: ${totalNoTaxes.toFixed(2)}$`,
        `Taxes: ${taxes.toFixed(2)}$`,
        '-----------',
        `Total price: ${totalWithTaxes.toFixed(2)}$`
    ];

    console.log(resultMessage.join('\n'));
}

computerStore([
    'regular'
    ])
    
    