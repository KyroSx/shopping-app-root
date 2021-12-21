import { Home } from '@/pages/Home/Home';
import { renderWithProviders } from '@/utils/testing';
import { Texts } from '@/ui/craft/texts';

describe(Home, () => {
  const renderHome = () => {
    const home = renderWithProviders(Home, {});

    return { home };
  };

  it('render text.description', () => {
    const { home } = renderHome();

    expect(home.getByText(Texts.home.description)).toBeInTheDocument();
  });
});
