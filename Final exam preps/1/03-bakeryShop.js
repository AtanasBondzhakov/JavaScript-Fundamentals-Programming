function bakeryShop(data) {
    let command = data.shift();
    const store = {};
    let soldQty = 0;

    while (command !== 'Complete') {
        let [action, quantity, food] = command.split(' ');
        quantity = Number(quantity);

        if (action === 'Receive') {
            if (quantity <= 0) {
                command = data.shift();
                continue;
            }

            if (!store.hasOwnProperty(food)) {
                store[food] = 0;
            }

            store[food] += quantity;
        } else if (action === 'Sell') {

            if (!store.hasOwnProperty(food)) {
                console.log(`You do not have any ${food}.`);
                command = data.shift();
                continue;
            }

            if (store[food] < quantity) {
                const currentQty = store[food];
                soldQty += currentQty;
                console.log(`There aren't enough ${food}. You sold the last ${currentQty} of them.`);
                delete store[food];

            } else {
                soldQty += quantity;
                store[food] -= quantity;
                console.log(`You sold ${quantity} ${food}.`);
                if (store[food] === 0) {
                    delete store[food];
                }
            }
        }
        command = data.shift();
    }

    for (const product in store) {
        console.log(`${product}: ${store[product]}`);
    }
    console.log(`All sold: ${soldQty} goods`);
}