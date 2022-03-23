import { Button, ButtonProps } from '@/ui/components';
import { Events } from '@/utils/testing/events';
import { Screen } from '@/utils/testing/screen';

type Props = ButtonProps;

describe(Button, () => {
  const renderButton = (props?: Partial<Props>) => {
    return {
      button: Screen.renderWithProviders(Button, {
        ...props,
        children: 'button',
      }),
    };
  };

  const setUp = () => {
    const onClick = jest.fn();
    renderButton({ onClick });

    return {
      onClick,
    };
  };

  const setUpDisabled = () => {
    const onClick = jest.fn();
    renderButton({ onClick, disabled: true });

    return {
      onClick,
    };
  };

  const getButton = () => Screen.get.byText({ text: 'button' });

  it('calls onClick when click', () => {
    const { onClick } = setUp();

    Events.clickOn(getButton());

    expect(onClick).toHaveBeenCalled();
  });

  it('does not call on onClick when disabled', () => {
    const { onClick } = setUpDisabled();

    Events.clickOn(getButton());

    expect(onClick).not.toHaveBeenCalled();
  });
});
