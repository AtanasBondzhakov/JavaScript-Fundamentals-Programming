function formatGrade(grade) {
    let result = '';
    let isFail = false;
    
    if(grade < 3) {
        console.log(`Fail (2)`);
        isFail = true;
    } else if (grade < 3.5) {
        result = 'Poor';
    } else if (grade < 4.5) {
        result = 'Good';
    } else if (grade < 5.5) {
        result = 'Very good';
    } else {
        result = 'Excellent';
    }

    if(!isFail) {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}

formatGrade(3.33); //Poor (3.33)
formatGrade(4.50); //Very good (4.50)
formatGrade(2.99); //Fail (2)