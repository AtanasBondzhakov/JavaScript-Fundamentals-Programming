function schoolRegister(data) {
    const studentsList = {};

    for (const line of data) {
        const [nameInfo, gradeInfo, avgScoreInfo] = line.split(', ');
        const name = nameInfo.split(': ')[1];
        const grade = Number(gradeInfo.split(': ')[1]) + 1;
        const avgScore = Number(avgScoreInfo.split(': ')[1]);

        if (avgScore < 3) {
            continue;
        }

        if (!studentsList.hasOwnProperty(grade)) {
            studentsList[grade] = { [name]: avgScore };
        }

        studentsList[grade][name] = avgScore;
    }

    const sortedList = Object.entries(studentsList);

    for (let [grade, studentsInfo] of sortedList) {
        console.log(`${grade} Grade`);

        let names = Object.keys(studentsInfo);
        console.log(`List of students: ${names.join(', ')}`);

        let score = Object.values(studentsInfo);
        let totalScore = 0;

        score.forEach(s => totalScore += s);

        console.log(`Average annual score from last year: ${(totalScore / score.length).toFixed(2)}`);
        console.log('');
    }
}