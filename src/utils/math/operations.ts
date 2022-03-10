export const increment = (number: number) => number + 1;
export const decrement = (number: number) => number - 1;

export const sum = (...numbers: number[]) =>
  numbers.reduce((total, number) => total + number, 0);

export const multiply = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

const absolute = (number: number) => Math.abs(number);

export const sub = (...numbers: number[]) =>
  numbers.reduce((total, number) => absolute(total) - absolute(number), 0);
