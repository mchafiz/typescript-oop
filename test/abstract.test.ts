describe("Abstract", () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;
    constructor(id: number) {
      this.id = id;
    }

    hello(): void {
      console.info(`Hello, my name is ${this.name}`);
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support", () => {
    const customer = new RegularCustomer(1, "Hafiz");
    customer.hello();
    customer.sayHello("Iraaa");
  });
});
