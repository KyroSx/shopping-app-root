const isLengthBelowZero = (length: number) => length <= 0;

export function isListEmpty<T>(list: T[] | undefined): boolean {
  if (!list) return true;

  return isLengthBelowZero(list.length);
}
