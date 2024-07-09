function storeProvision(stockArr, orderedArr) {
    const store = {};

    for (let i = 0; i < stockArr.length; i += 2) {
        const product = stockArr[i];
        const quantity = Number(stockArr[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < orderedArr.length; i += 2) {
        const product = orderedArr[i];
        const quantity = Number(orderedArr[i + 1]);
        
        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        }

        store[product] += quantity;
    }

    const storeEntries = Object.entries(store);
    for (let [product, qty] of storeEntries) {
        console.log(`${product} -> ${qty}`);
    }
}
