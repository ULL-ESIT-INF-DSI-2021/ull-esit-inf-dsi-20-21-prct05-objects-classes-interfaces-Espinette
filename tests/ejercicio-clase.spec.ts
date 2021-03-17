import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-clase/persona';


describe('EJERCICIO-CLASE', () => {
  const persona1 = new Persona(`Alberto`, `Rios de la Rosa`, `21-12-2000`, `Hombre`, 79074751);
  describe('Prueba de un objeto de la clase persona', () => {
    it('Se puede instanciar un objeto, distinto a null', () => {
      expect(persona1).not.to.be.equal(null);
    });
    describe('Probando los getters', () => {
      it('persona1.getNombre() returns Alberto', () => {
        expect(persona1.getNombre()).to.be.equal('Alberto');
      });
      it('persona1.getNombre() returns Rios de la Rosa', () => {
        expect(persona1.getApellidos()).to.be.equal('Rios de la Rosa');
      });
      it('persona1.getNombre() returns 21-12-2000', () => {
        expect(persona1.getFechaNacimiento()).to.be.equal('21-12-2000');
      });
      it('persona1.getNombre() returns Hombre', () => {
        expect(persona1.getGenero()).to.be.equal('Hombre');
      });
      it('persona1.getNombre() returns 79074751', () => {
        expect(persona1.getDni()).to.be.equal(79074751);
      });
    });
  });
});
