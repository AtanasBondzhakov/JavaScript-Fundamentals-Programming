function dayOfWeek(dayAsNum) {
    const weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    if (dayAsNum > 0 && dayAsNum <= weekdays.length) {
        console.log(weekdays[dayAsNum - 1]);
    } else {
        console.log('Invalid day!');
    }
}
