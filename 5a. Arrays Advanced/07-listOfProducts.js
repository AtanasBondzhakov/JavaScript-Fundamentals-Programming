function listOfProducts(products) {
    const result = products.sort();

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);//1Apples 2.Onions 3.Potatoes 4.Tomatoes
listOfProducts(['Watermelon', 'Banana', 'Apples']); //1.Apples 2.Banana 3.Watermelon