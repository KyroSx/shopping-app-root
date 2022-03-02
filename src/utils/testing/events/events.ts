import userEvent from '@testing-library/user-event';

export const typeOn = (element: HTMLElement) => (value: string) =>
  userEvent.type(element, value);

export function clickOn(element: HTMLElement) {
  userEvent.click(element);
}
