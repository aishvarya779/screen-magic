import { ScreenMagicPage } from './app.po';

describe('screen-magic App', () => {
  let page: ScreenMagicPage;

  beforeEach(() => {
    page = new ScreenMagicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
