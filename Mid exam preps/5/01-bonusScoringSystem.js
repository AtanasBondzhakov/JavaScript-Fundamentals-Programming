function bonusScoringSystem(data) {
    const studentsCount = Number(data.shift());
    const lecturesCount = Number(data.shift());
    const addBonus = Number(data.shift());

    let maxBonus = 0;
    let maxAttendance = 0;

    for (let i = 0; i < studentsCount; i++) {
        let currentAttendance = Number(data[i]);
        let totalBonus = currentAttendance / lecturesCount * (5 + addBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
        }

        if (currentAttendance > maxAttendance) {
            maxAttendance = currentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}