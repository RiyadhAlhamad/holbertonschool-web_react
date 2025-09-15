// DirectorInterface definition
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface definition
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementation
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  // Ensure console.log(instance) prints "Director"
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return 'Director';
  }
}

// Teacher class implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }

  // Ensure console.log(instance) prints "Teacher"
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return 'Teacher';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Test the implementation - Expected results as requested
// Test createEmployee function with exact expected output
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// isDirector type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// Expected result demonstration
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// String literal types - Subjects and teachClass
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Expected result demonstration for teachClass
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
