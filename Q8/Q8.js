const students = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
];

function getHighGrades(students) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > 80) {
            result.push(students[i].name);
        }
    }
    return result;
}
const highGrades = getHighGrades(students);
console.log(highGrades);