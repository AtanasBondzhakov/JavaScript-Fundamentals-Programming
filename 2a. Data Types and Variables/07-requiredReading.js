function requiredReading(pagesCount, pagesPerHour, daysForRead) {
    let totalHoursToRead = pagesCount / pagesPerHour;
    let hoursPerDay = totalHoursToRead / daysForRead;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
// requiredReading(432, 15, 4);