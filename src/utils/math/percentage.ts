export function decrease(total: number, percentage: number) {
  // eslint-disable-next-line no-shadow
  const discount = (total * percentage) / 100;

  return total - discount;
}

export function discount(total: number, percentage: number) {
  return (total * percentage) / 100;
}
