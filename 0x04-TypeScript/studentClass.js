// StudentClass.ts
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName());

