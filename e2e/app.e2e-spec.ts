import { SitepersoPage } from './app.po';

describe('siteperso App', () => {
  let page: SitepersoPage;

  beforeEach(() => {
    page = new SitepersoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
