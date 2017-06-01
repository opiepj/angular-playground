import { browser, by, element, promise } from 'protractor';

export class AcnNgStarterPage {
  public navigateTo(): promise.Promise<Object> {
    return browser.get('/');
  }
  
  public getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
