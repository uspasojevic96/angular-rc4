import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getInitialText() {
    return element(by.id('1')).getText();
  }

  getEncryptedText() {
    return element(by.id('2')).getText();
  }

  getDecryptedText() {
    return element(by.id('3')).getText();
  }
}
