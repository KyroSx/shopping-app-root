import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Button, ButtonProps } from '@/ui/components';
import { renderWithProviders } from '@/utils/testing';

type Props = ButtonProps;

describe(Button, () => {
  const renderButton = (props?: Partial<Props>) => {
    return {
      button: renderWithProviders(Button, { ...props, children: 'button' }),
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

  const getButton = () => screen.getByText('button');

  it('calls onClick when click', () => {
    const { onClick } = setUp();

    userEvent.click(getButton());

    expect(onClick).toHaveBeenCalled();
  });

  it('does not call on onClick when disabled', () => {
    const { onClick } = setUpDisabled();

    userEvent.click(getButton());

    expect(onClick).not.toHaveBeenCalled();
  });
});
