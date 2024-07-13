function companyUsers(data) {
    const companies = {};

    for (const line of data) {
        const [companyName, employeeId] = line.split(' -> ');

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        if (!companies[companyName].includes(employeeId)) {
            companies[companyName].push(employeeId);
        }
    }

    const sortedCompanies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, employees] of sortedCompanies) {
        console.log(name);
        employees.forEach(employee => {
            console.log(`-- ${employee}`);
        });
    }
}
