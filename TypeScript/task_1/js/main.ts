interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

const teacher3: Teacher = {
  firstName: 'Riyadh',
  fullTimeEmployee: false,
  lastName: 'Alhamad',
  location: 'Zulfi',
  contract: false,
};

const director1: Directors = {
  firstName: 'Nasser',
  lastName: 'Alhamad',
  location: 'Riyadh',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);

// Test printTeacher function
console.log(printTeacher("Riyadh", "Nasser"));

// StudentClass interfaces and implementation
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test StudentClass
const student1 = new StudentClass("Riyadh", "Nasser");
console.log(student1.displayName());
console.log(student1.workOnHomework());
