import { Money } from '@/ui/components';
import { Screen } from '@/utils/testing/screen';

describe(Money, () => {
  const renderMoney = (value: number) => {
    Screen.renderWithProviders(Money, { children: value });
  };

  it('formats int as money', () => {
    renderMoney(10);

    expect(Screen.get.byText({ text: '$10.00' })).toBeInTheDocument();
  });

  it('render float as money', () => {
    renderMoney(10.5);

    expect(Screen.get.byText({ text: '$10.50' })).toBeInTheDocument();
  });

  it('render big float as money', () => {
    renderMoney(1100.5555);

    expect(Screen.get.byText({ text: '$1,100.56' })).toBeInTheDocument();
  });
});
