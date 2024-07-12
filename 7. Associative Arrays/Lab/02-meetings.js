function meetings(data) {
    const meetingsList = {};

    for (const meet of data) {
        const [weekday, name] = meet.split(' ');
        if(!meetingsList.hasOwnProperty(weekday)) {
            meetingsList[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (const meet in meetingsList) {
        console.log(`${meet} -> ${meetingsList[meet]}`);
    }
}