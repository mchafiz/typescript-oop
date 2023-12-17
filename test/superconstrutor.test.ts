describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  class Employee extends Person {
    department: string;
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    sayHello(name: string): void {
      super.sayHello(name);
      console.info(`I work in ${this.department}`);
    }
  }
  it("should support", () => {
    const employee = new Employee("Hafiz", "IT");
    console.info(employee.name);
    console.info(employee.department);
    employee.sayHello("John");
  });
});
