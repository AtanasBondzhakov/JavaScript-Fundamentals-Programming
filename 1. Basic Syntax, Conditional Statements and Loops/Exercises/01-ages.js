function ages(age) {
    let result = '';
    if (age >= 0 && age < 3) {
        result = 'baby';
    } else if (age >= 3 && age < 14) {
        result = 'child';
    } else if (age >= 14 && age < 20) {
        result = 'teenager';
    } else if (age >= 20 && age < 66) {
        result = 'adult';
    } else if (age >= 66) {
        result = 'elder';
    } else {
        result = 'out of bounds'
    }
    console.log(result);
}

ages(20); //adult
ages(1); //baby
ages(100); //elder
ages(-1); //out of bounds
