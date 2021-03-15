import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Ejercicio 1 - Decodificar resistencias', () => {
  it('decodeResistor(`Marron`, `Verde`) returns value 15', () => {
    expect(decodeResistor([`Marron`, `Verde`])).to.be.equal(15);
  });

  it('decodeResistor([`Marron`, `Verde`, `Violeta`]) returns value 15', () => {
    expect(decodeResistor([`Marron`, `Verde`, `Violeta`])).to.be.equal(15);
  });

  it('decodeResistor([`Azul`, `Verde`]) returns value 65', () => {
    expect(decodeResistor([`Azul`, `Verde`])).to.be.equal(65);
  });
});