export function decrease(total: number, percentage: number) {
  const discount = (total * percentage) / 100;

  return total - discount;
}
