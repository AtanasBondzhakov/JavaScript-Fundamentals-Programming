function theatrePromotions(dayType, age) {
    let ticketPrice = 0;
    let isError = false;
    switch (dayType) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                ticketPrice = 12;
            } else if (age > 18 && age <= 64) {
                ticketPrice = 18;
            } else if (age > 64 && age <= 122) {
                ticketPrice = 12;
            } else {
                isError = true;
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                ticketPrice = 15;
            } else if (age > 18 && age <= 64) {
                ticketPrice = 20;
            } else if (age > 64 && age <= 122) {
                ticketPrice = 15;
            } else {
                isError = true;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                ticketPrice = 5;
            } else if (age > 18 && age <= 64) {
                ticketPrice = 12;
            } else if (age > 64 && age <= 122) {
                ticketPrice = 10;
            } else {
                isError = true;
            }
            break;
        default:
            isError = true;
            break;
    }
    
    if (!isError) {
        console.log(`${ticketPrice}$`);
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', 
42
);
theatrePromotions('Holiday', -12);