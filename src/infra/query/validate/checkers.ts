import { isListEmpty } from '@/utils/list/isEmpty';

export function isArray(key: any) {
  return Array.isArray(key);
}

export function isEmptyArray(key: any): boolean {
  return isArray(key) && isListEmpty(key);
}

export function isNotFunction(fn: any): boolean {
  return typeof fn !== 'function';
}
