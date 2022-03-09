import { Money } from '@/ui/components';
import { Screen } from '@/utils/testing/screen';

describe(Money, () => {
  const renderMoney = (value: number) => {
    const money = Screen.renderWithProviders(Money, { children: value });

    return {
      money,
    };
  };

  it('formats int as money', () => {
    const { money } = renderMoney(10);

    expect(money.getByText('$10.00')).toBeInTheDocument();
  });

  it('render float as money', () => {
    const { money } = renderMoney(10.5);

    expect(money.getByText('$10.50')).toBeInTheDocument();
  });

  it('render big float as money', () => {
    const { money } = renderMoney(1100.5555);

    expect(money.getByText('$1,100.56')).toBeInTheDocument();
  });
});
