function requiredReading(pagesCount, pagesPerHour, daysForRead) {
    let totalHoursToRead = pagesCount / pagesPerHour;
    let hoursPerDay = totalHoursToRead / daysForRead;

    console.log(hoursPerDay);
}
