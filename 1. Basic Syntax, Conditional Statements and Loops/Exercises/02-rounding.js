function rounding(num, precision) {
    let result = 0;

    if (precision > 15) {
        precision = 15;
    }
    
    result = Number.parseFloat(num.toFixed(precision));
    console.log(result);
}

rounding(3.1415926535897932384626433832795,2); //3.14
rounding(10.5,3); //10.5
