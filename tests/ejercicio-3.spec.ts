import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';

describe('EJERCICIO 3 - MEDIOS DE TRANSPORTE', () => {
  const coche1 = new Coche('MazdaAzul', 40, 4, 5, 'Azul');
  describe('Probar llamadas a un objeto de la clase Coche', () => {
    it('Se crea un objeto coche distinto a null', () => {
      expect(coche1).not.to.be.equal(null);
    });
  });
});

