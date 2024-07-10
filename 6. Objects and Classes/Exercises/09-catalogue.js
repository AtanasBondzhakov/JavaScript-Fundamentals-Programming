function catalogue(data) {
    const store = {};

    for (let line of data) {
        let [product, price] = line.split(' : ');
        price = Number(price);

        store[product] = price;
    }

    const sortedStore = Object.entries(store).sort((a,b) => a[0].localeCompare(b[0]));
    
    let initial = '';

    for (let [product, price] of sortedStore) {
        const firstLetter = product[0];

        if (initial !== firstLetter) {
            initial = firstLetter;
            console.log(initial);
        }

        console.log(`  ${product}: ${price}`);
    }
}
