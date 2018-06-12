import { MaterialAngularcliPage } from './app.po';

describe('angular-dashboard App', () => {
  let page: MaterialAngularcliPage;

  beforeEach(() => {
    page = new MaterialAngularcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
