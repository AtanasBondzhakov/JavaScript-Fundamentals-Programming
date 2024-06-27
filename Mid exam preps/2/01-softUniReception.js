function softUniReception(data) {
    const firstEmployeeEfficiency = Number(data[0]);
    const secondEmployeeEfficiency = Number(data[1]);
    const thirdEmployeeEfficiency = Number(data[2]);
    let studentsCount = Number(data[3]);

    const totalEfficiencyPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;

    let hoursNeed = 0;
    let hoursCount = 1;

    while (studentsCount > 0) {
        
        if (hoursCount % 4 !== 0) {
            studentsCount -= totalEfficiencyPerHour;
        }
        hoursNeed++;
        hoursCount++
    }
    console.log(`Time needed: ${hoursNeed}h.`);
}