import userEvent from '@testing-library/user-event';

export const typeOn = (element: HTMLElement) => (value: string) =>
  userEvent.type(element, value);

const clear = (element: HTMLElement) => {
  userEvent.clear(element);
};

export const clearThenTypeOn = (element: HTMLElement) => (value: string) => {
  clear(element);
  typeOn(element)(value);
};

export const clickOn = (element: HTMLElement) => {
  userEvent.click(element);
};
