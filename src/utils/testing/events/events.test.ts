import userEvent from '@testing-library/user-event';
import { Events } from './index';

jest.mock('@testing-library/user-event');

describe('Events', () => {
  const element = null as any as HTMLElement;

  describe('clickOn', () => {
    it('calls userEvent.click', async () => {
      Events.clickOn(element);

      expect(userEvent.click).toHaveBeenCalledWith(element);
    });
  });

  describe('typeOn', () => {
    const value = 'value';

    it('calls userEvent.type', async () => {
      Events.typeOn(element)(value);

      expect(userEvent.type).toHaveBeenCalledWith(element, value);
    });
  });

  describe('clearThenTypeOn', () => {
    const value = 'value';

    it('calls userEvent.clear and userEvent.type', async () => {
      Events.clearThenTypeOn(element)(value);

      expect(userEvent.type).toHaveBeenCalledWith(element, value);
      expect(userEvent.clear).toHaveBeenCalledWith(element);
    });
  });
});
