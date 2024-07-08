function listOfProducts(products) {
    const result = products.sort();

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}
