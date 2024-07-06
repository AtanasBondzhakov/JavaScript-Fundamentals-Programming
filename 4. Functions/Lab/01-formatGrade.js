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
