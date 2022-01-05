export const increment = (number: number) => number + 1;
export const decrement = (number: number) => number - 1;

export const sum = (...numbers: number[]) =>
  numbers.reduce((total, number) => total + number, 0);
