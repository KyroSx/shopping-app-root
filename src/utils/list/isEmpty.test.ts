import { isListEmpty } from '@/utils/list/isEmpty';

describe(isListEmpty, () => {
  it('returns true if its is undefined', () => {
    expect(isListEmpty(undefined)).toBe(true);
  });

  it('returns true if it is []', () => {
    expect(isListEmpty([])).toBe(true);
  });

  it('returns false if list has items', () => {
    const randomList = ['random', 'random-1', {}, true];
    expect(isListEmpty(randomList)).toBe(false);
  });
});
