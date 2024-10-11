function isDirector(employee: TeacherInterface | DirectorInterface): employee is DirectorInterface {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: TeacherInterface | DirectorInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);

console.log(executeWork(emp1));
console.log(executeWork(emp2));
