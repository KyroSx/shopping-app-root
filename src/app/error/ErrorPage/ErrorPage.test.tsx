import { Screen } from '@/utils/testing/screen';
import { Texts } from '@/ui/craft/texts';
import { ErrorPage } from '@/app/error/ErrorPage/ErrorPage';

describe(ErrorPage, () => {
  const renderErrorPage = () => Screen.renderWithProviders(ErrorPage);

  beforeEach(renderErrorPage);

  it('renders title', () => {
    const title = Screen.get.byText({ text: Texts.global.error.unexpected() });
    expect(title).toBeInTheDocument();
  });
});
