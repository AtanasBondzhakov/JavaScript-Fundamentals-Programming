function storage(data) {
    const storageMap = new Map();

    for (const productInfo of data) {
        let [product, quantity] = productInfo.split(' ');
        quantity = Number(quantity);

        if (!storageMap.has(product)) {
            storageMap.set(product, 0);
        }

        storageMap.set(product, storageMap.get(product) + quantity);
    }

    for (const [product, qty] of storageMap) {
        console.log(`${product} -> ${qty}`);
    }
}