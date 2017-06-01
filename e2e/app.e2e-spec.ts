import { AcnNgStarterPage } from './app.po';

describe('acn-ng-starter App', () => {
  let page: AcnNgStarterPage;
  
  beforeEach(() => {
    page = new AcnNgStarterPage();
  });
  
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
