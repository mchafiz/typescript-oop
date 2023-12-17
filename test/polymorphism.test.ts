describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`I am a Vice President, and my name is ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`I am a Manager, and my name is ${manager.name}`);
    } else {
      console.info(`I am a Employee and my name is ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`I am a Manager, and my name is ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`I am a Vice President, and my name is ${vp.name}`);
    } else {
      console.info(`I am a Employee and my name is ${employee.name}`);
    }
  }

  it("should support", () => {
    sayHello(new Employee("Hafiz"));
    sayHello(new Manager("Iraaa"));
    sayHello(new VicePresident("Robert"));
  });

  it("should support", () => {
    sayHelloWrong(new Employee("Hafiz"));
    sayHelloWrong(new Manager("Iraaa"));
    sayHelloWrong(new VicePresident("Robert"));
  });
});
