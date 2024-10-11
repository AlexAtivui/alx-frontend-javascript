// PrintTeacher.ts
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher("John", "Doe"));
