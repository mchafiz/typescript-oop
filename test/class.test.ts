describe("Class", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  class Order {}

  it("should can create class", () => {
    const customer: Customer = new Customer(20, "hafiz");
    const order: Order = new Order();
  });

  it("should can create class with constructor", () => {
    const customer: Customer = new Customer(29, "John");
    customer.age = 20;
    expect(customer.name).toEqual("John");
    expect(customer.id).toEqual(29);
    expect(customer.age).toEqual(20);
  });
});
