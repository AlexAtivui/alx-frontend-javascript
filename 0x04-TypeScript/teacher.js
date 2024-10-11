// Teacher.ts
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    firstName: "Sarah",
    lastName: "Connor",
    fullTimeEmployee: true,
    location: "California",
    contract: true
};

console.log(teacher);
