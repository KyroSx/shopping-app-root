import { isArray, isEmptyArray, isNotFunction } from './checkers';

export function validateParams({ key, fn }: any): void {
  if (!key && !fn) {
    throw new Error('key and function are required');
  }

  if (!isArray(key)) {
    throw new Error('key must be an array');
  }

  if (!key && fn) {
    throw new Error('key is required');
  }

  if (key && !fn) {
    throw new Error('function is required');
  }

  if (isEmptyArray(key)) {
    throw new Error('key is required');
  }

  if (isNotFunction(fn)) {
    throw new Error('function must be a function');
  }
}
