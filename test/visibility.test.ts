describe("Visibility", () => {
  class Counter {
    protected number: number = 0;

    public increment(): void {
      this.number++;
    }

    public getNumber(): number {
      return this.number;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.number = this.number + 2;
    }
  }

  it("should can not access private member", () => {
    const counter = new DoubleCounter();
    // counter.number = 10;
    counter.increment();
    counter.increment();
    counter.increment();

    expect(counter.getNumber()).toBe(6);
  });
});
