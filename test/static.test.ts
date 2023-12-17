describe("Static", () => {
  class Configuration {
    static NAME: string = "Hafiz";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Hafiz";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total: number = 0;
      for (let value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support math util", () => {
    expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support", () => {
    expect(Configuration.NAME).toBe("Hafiz");
    expect(Configuration.VERSION).toBe(1.0);
    expect(Configuration.AUTHOR).toBe("Hafiz");
  });
});
