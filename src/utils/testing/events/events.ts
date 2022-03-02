import userEvent from '@testing-library/user-event';

export function clickOn(element: HTMLElement) {
  userEvent.click(element);
}
