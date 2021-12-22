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

  const getButton = () => screen.getByText('button');

  it('calls onClick when click', () => {
    const onClick = jest.fn();
    renderButton({ onClick });

    userEvent.click(getButton());

    expect(onClick).toHaveBeenCalled();
  });

  it('does not call on onClick when disabled', () => {
    const onClick = jest.fn();
    renderButton({ onClick, disabled: true });

    userEvent.click(getButton());

    expect(onClick).not.toHaveBeenCalled();
  });
});
