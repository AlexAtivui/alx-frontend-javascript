// Subject.ts
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher() {
            return this.experienceTeachingC ? "Available Teacher" : "No available teacher";
        }
    }

    export class Java {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            return this.experienceTeachingC ? "Available Teacher" : "No available teacher";
        }
    }

    export class React {
        getRequirements() {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher() {
            return this.experienceTeachingC ? "Available Teacher" : "No available teacher";
        }
    }
}
