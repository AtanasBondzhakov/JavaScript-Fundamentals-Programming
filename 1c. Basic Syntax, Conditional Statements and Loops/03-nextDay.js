function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

nextDay(2016, 9, 30); //2016-10-1
nextDay(2020, 3, 24); //2020-3-25
