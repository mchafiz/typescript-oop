describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can use parameter properties", () => {
    const customer = new Person("Hafiz");
    customer.sayHello("John");
  });
});
