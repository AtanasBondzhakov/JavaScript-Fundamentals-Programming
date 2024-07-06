function orders(product, quantity) {
    let total = 0;

    switch (product) {
        case 'coffee':
            total = quantity * 1.5;
            break;
        case 'water':
            total = quantity * 1;
            break;
        case 'coke':
            total = quantity * 1.4;
            break;
        case 'snacks':
            total = quantity * 2;
            break;
    }

    console.log(total.toFixed(2));
}
