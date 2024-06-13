function updateEmployeeRecord(employee, updates) {
    for (let key in updates) {
        if (updates.hasOwnProperty(key)) {
            employee[key] = updates[key];
        }
    }
    return employee;
}

const employee = { name: 'John', position: 'Developer', salary: 50000 };
const updates = { position: 'Senior Developer', salary: 60000 };
console.log(updateEmployeeRecord(employee, updates));