import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-clase/persona';


describe('EJERCICIO-CLASE', () => {
  const persona1 = new Persona(`Alberto`, `Rios de la Rosa`, `21-12-2000`, `Hombre`, 79074751);
  describe('Prueba de un objeto de la clase persona', () => {
    it('Se puede instanciar un objeto, distinto a null', () => {
      expect(persona1).not.to.be.equal(null);
    });
  });
});
