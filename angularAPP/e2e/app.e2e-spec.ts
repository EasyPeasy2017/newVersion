import { EasyPeasyPage } from './app.po';

describe('easy-peasy App', () => {
  let page: EasyPeasyPage;

  beforeEach(() => {
    page = new EasyPeasyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
