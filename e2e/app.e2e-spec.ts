import { AppPage } from './app.po';

describe('angular-fontawesome App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Font Awesome 5 Angular Demo');
  });
});
