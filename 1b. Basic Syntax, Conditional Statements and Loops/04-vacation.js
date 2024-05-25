function vacation(pplCount, groupType, day) {
    let price = 0;

    switch (groupType) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            break;
    }
    let totalPrice = pplCount * price;

    if (groupType === 'Students' && pplCount >= 30) {
        totalPrice *= 0.85;
    }
    if (groupType === 'Business' && pplCount >= 100) {
        totalPrice = (pplCount - 10) * price;
    }
    if (groupType === 'Regular' && pplCount >= 10 && pplCount <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday"); //Total price: 266.73
vacation(40, "Regular", "Saturday"); //Total price: 800.00
