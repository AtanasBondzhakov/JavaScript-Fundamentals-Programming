function employees(names) {
    const employeesList = {};

    for (let name of names) {
        employeesList[name] = name.length;
    }

    for (let employee in employeesList) {
        console.log(`Name: ${employee} -- Personal Number: ${employeesList[employee]}`);
    }
}