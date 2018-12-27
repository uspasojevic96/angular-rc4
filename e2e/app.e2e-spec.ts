import {AppPage} from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  describe(' - Testing initial text', function () {
    it(' - Element will contain correct text', function () {
      expect(page.getInitialText()).toContain('Hello everyone');
    });
  });

  describe(' - Testing encrypted text', function () {
    it(' - Element will contain correct text', function () {
      expect(page.getEncryptedText()).toContain('G4ÓÄ¼r8ür¡ô');
    });
  });

  describe(' - Testing decrypted text', function () {
    it(' - Element will contain correct text', function () {
      expect(page.getDecryptedText()).toContain('Hello everyone');
    });
  });
});
