import {RC4Service} from './rc4.service';

describe(' - Testing RC4 Service', function () {
  let service;
  beforeEach(function () {
    service = new RC4Service();
  });

  describe(' - Testing functions', function () {
    describe(' - Testing initalize', function () {
      it(' - Function will not throw', function () {
        expect(function () {
          service.initialize();
        }).not.toThrow();
      });
    });

    describe(' - Testing KSA', function () {
      beforeEach(function () {
        spyOn(service, 'swap');
      });

      it(' - Function will not throw', function () {
        expect(function () {
          service.KSA('');
        }).not.toThrow();
      });
    });

    describe(' - Testing PRGA', function () {
      beforeEach(function () {
        spyOn(service, 'swap');
      });

      it(' - Function will not throw', function () {
        expect(function () {
          service.PRGA('');
        }).not.toThrow();
      });
    });

    describe(' - Testing swap', function () {
      it(' - Function will not throw', function () {
        expect(function () {
          service.swap(0, 0);
        }).not.toThrow();
      });
    });

    describe(' - Testing RC4', function () {
      beforeEach(function () {
        spyOn(service, 'initialize');
        spyOn(service, 'KSA');
        spyOn(service, 'PRGA');
      });

      it(' - Function will not throw', function () {
        expect(function () {
          service.RC4('', '');
        }).not.toThrow();
      });
    });
  });
});
