function schoolGrades(data) {
    const students = {};

    for (const student of data) {
        let tokens = student.split(' ');
        const studentName = tokens.shift();

        if (!students.hasOwnProperty(studentName)) {
            students[studentName] = [];
        }

        for (const grade of tokens) {
            students[studentName].push(Number(grade));
        }
    }

    const sortedStudentsList = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    sortedStudentsList.forEach(student => {
        const [name, grades] = student;
        const totalGrade = grades.reduce((acc, val) => acc + val, 0);
        const avgGrade = totalGrade / grades.length;

        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    })
}