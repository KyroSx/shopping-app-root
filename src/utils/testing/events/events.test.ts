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
});
