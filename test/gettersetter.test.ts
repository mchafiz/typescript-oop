describe("Getter Setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      return this._name || "Guest";
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should can have getter setter", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "Hafiz";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
