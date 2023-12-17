export namespace MathUtil {
  export const PI: number = 3.14;

  export function sum(...values: number[]): number {
    let total: number = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  }
}

export namespace Eko {
  export function sayHello(name: string): void {
    console.info(`Hello ${name}`);
  }
}

export namespace Hafiz {
  export function sayHello(name: string): void {
    console.info(`Hello ${name}`);
  }
}
