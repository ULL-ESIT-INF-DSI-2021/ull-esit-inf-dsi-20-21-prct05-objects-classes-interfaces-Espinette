import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';
import {Moto} from '../src/ejercicio-3/moto';
import {Patinete} from '../src/ejercicio-3/patinete';
import {Tren} from '../src/ejercicio-3/trenes';
import {Guagua} from '../src/ejercicio-3/guaguas';
import {Bicicleta} from '../src/ejercicio-3/bicicletas';
import {Peaton} from '../src/ejercicio-3/peaton';
import {Street} from '../src/ejercicio-3/street';


describe('EJERCICIO 3 - MEDIOS DE TRANSPORTE', () => {
  const coche1 = new Coche('MazdaAzul', 40, 4, 5);
  const coche3 = new Coche('MazdaAzul', 40, 4, 5);
  const coche4 = new Coche('MazdaAzul', 40, 4, 5);
  const moto1 = new Moto('HurleyBlanca', 25, 2, 2);
  const guagua1 = new Guagua('TitaAmarilla', 33, 8, 55);
  const bici1 = new Bicicleta('BicicVerde', 15, 2, 1);
  const tren1 = new Tren('TrenBala', 65, 30, 155);
  const patinete1 = new Patinete('Patinete', 10, 2, 1);
  const patinete2 = new Patinete('Patinete', 10, 2, 1);
  const peaton1 = new Peaton('Peaton', 5, 0, 1);
  const peaton2 = new Peaton('Peaton', 5, 0, 1);
  const peaton3 = new Peaton('Peaton', 5, 0, 1);
  const peaton4 = new Peaton('Peaton', 5, 0, 1);
  const peaton5 = new Peaton('Peaton', 5, 0, 1);


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
      it('coche1.aforo returns 5', () => {
        expect(coche1.aforo).to.be.equal(5);
      });
    });
    describe('Establece un valor a un elemento público clase coche', () => {
      const coche2 = new Coche('MazdaAzul', 40, 4, 5);
      coche2.nombre = `RenaultVerde`;
      coche2.velocidad = 35;
      coche2.ruedas = 4;
      coche2.aforo = 7;
      it('coche2.nombre returns RenaultVerde', () => {
        expect(coche2.nombre).to.be.equal('RenaultVerde');
      });
      it('coche2.velocidad returns 35', () => {
        expect(coche2.velocidad).to.be.equal(35);
      });
      it('coche2.ruedas returns 4', () => {
        expect(coche2.ruedas).to.be.equal(4);
      });
      it('coche2.aforo returns 7', () => {
        expect(coche2.aforo).to.be.equal(7);
      });
    });
  });

  describe('Probar llamadas a un objeto del resto de las clases que se heredan de la clase vehiculo(No hace falta ver si hacen get o set pues ya vimos que funcionó)', () => {
    it('Se crea un objeto moto distinto a null', () => {
      expect(moto1).not.to.be.equal(null);
    });

    it('Se crea un objeto Guagua distinto a null', () => {
      expect(guagua1).not.to.be.equal(null);
    });

    it('Se crea un objeto tren distinto a null', () => {
      expect(tren1).not.to.be.equal(null);
    });

    it('Se crea un objeto bicicleta distinto a null', () => {
      expect(bici1).not.to.be.equal(null);
    });

    it('Se crea un objeto peaton distinto a null', () => {
      expect(peaton1).not.to.be.equal(null);
    });

    it('Se crea un objeto patinete distinto a null', () => {
      expect(patinete1).not.to.be.equal(null);
    });
  });
  const calle1 = new Street('Jesus y Maria', 'Santa Cruz', [coche1, guagua1, patinete1, peaton1, tren1, moto1, coche3, coche4, peaton2, peaton3, peaton4, peaton5, patinete2]);
  describe('Probar llamadas clase Street', () => {
    it('Obtener nombre de la calle returns Jesus y Maria', () => {
      expect(calle1.getCalle()).to.be.equal('Jesus y Maria');
    });
    it('Obtener localidad de la calle returns Santa Cruz', () => {
      expect(calle1.getLocalidad()).to.be.equal('Santa Cruz');
    });
    it('Contar los vehiculos segun su tipo que hay en una calle', () => {
      calle1.contVehiculos();
    });
  });
});

