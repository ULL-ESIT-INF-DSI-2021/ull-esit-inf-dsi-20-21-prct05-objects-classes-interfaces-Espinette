import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';

describe('EJERCICIO 3 - MEDIOS DE TRANSPORTE', () => {
  const coche1 = new Coche('MazdaAzul', 40, 4, 5, 'Azul');
  describe('Probar llamadas a un objeto de la clase Coche', () => {
    it('Se crea un objeto coche distinto a null', () => {
      expect(coche1).not.to.be.equal(null);
    });
    describe('Acceder a un elemento público clase coche', () => {
      it('coche1.nombre returns MazdaAzul', () => {
        expect(coche1.nombre).to.be.equal('MazdaAzul');
      });
      it('coche1.velocidad returns 40', () => {
        expect(coche1.velocidad).to.be.equal(40);
      });
      it('coche1.ruedas returns 4', () => {
        expect(coche1.ruedas).to.be.equal(4);
      });
      it('coche1.capacidad returns 5', () => {
        expect(coche1.capacidad).to.be.equal(5);
      });
      it('coche1.color returns Azul', () => {
        expect(coche1.color).to.be.equal('Azul');
      });
    });
    describe('Establece un valor a un elemento público clase coche', () => {
      const coche2 = new Coche('MazdaAzul', 40, 4, 5, 'Azul');
      coche2.nombre = `RenaultVerde`;
      coche2.velocidad = 35;
      coche2.ruedas = 4;
      coche2.capacidad = 7;
      coche2.color = 'Verde';
      it('coche2.nombre returns RenaultVerde', () => {
        expect(coche2.nombre).to.be.equal('RenaultVerde');
      });
      it('coche2.velocidad returns 35', () => {
        expect(coche2.velocidad).to.be.equal(35);
      });
      it('coche2.ruedas returns 4', () => {
        expect(coche2.ruedas).to.be.equal(4);
      });
      it('coche2.capacidad returns 7', () => {
        expect(coche2.capacidad).to.be.equal(7);
      });
      it('coche2.color returns Verde', () => {
        expect(coche2.color).to.be.equal('Verde');
      });
    });
  });
});

