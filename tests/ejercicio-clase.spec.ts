/* import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/ejercicio-clase/persona';
import {Estudiante} from '../src/ejercicio-clase/estudiante';
import {Profesor} from '../src/ejercicio-clase/profesor';
import {Asignatura} from '../src/ejercicio-clase/asignatura';


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
      it('persona1.getApellidos() returns Rios de la Rosa', () => {
        expect(persona1.getApellidos()).to.be.equal('Rios de la Rosa');
      });
      it('persona1.getFechaNacimiento() returns 21-12-2000', () => {
        expect(persona1.getFechaNacimiento()).to.be.equal('21-12-2000');
      });
      it('persona1.getGenero() returns Hombre', () => {
        expect(persona1.getGenero()).to.be.equal('Hombre');
      });
      it('persona1.getDni() returns 79074751', () => {
        expect(persona1.getDni()).to.be.equal(79074751);
      });
    });
    const persona2 = new Persona(`Alberto`, `Rios de la Rosa`, `21-12-2000`, `Hombre`, 79074751);
    persona2.setNombre('Pablo');
    persona2.setApellidos('Navarro Mendez');
    persona2.setFechaNacimiento('04-10-2000');
    persona2.setGenero('Hombre');
    persona2.setDni(12345678);
    describe('Probando los setters, creando una persona nueva a partir de ellos', () => {
      it('persona2.setNombre(Pablo) haciendo el get debe returns Pablo', () => {
        expect(persona2.getNombre()).to.be.equal('Pablo');
      });
      it('persona2.setNombre(Navarro Mendez) haciendo el get debe returns Navarro Mendez', () => {
        expect(persona2.getApellidos()).to.be.equal('Navarro Mendez');
      });
      it('persona2.setFechaNacimiento(04-10-2000) haciendo el get debe returns 04-10-2000', () => {
        expect(persona2.getFechaNacimiento()).to.be.equal('04-10-2000');
      });
      it('persona2.setGenero(Hombre) haciendo el get debe returns Hombre', () => {
        expect(persona2.getGenero()).to.be.equal('Hombre');
      });
      it('persona2.setDni(12345678) haciendo el get debe returns 12345678', () => {
        expect(persona2.getDni()).to.be.equal(12345678);
      });
    });
  });
  const persona3 = new Estudiante(`Alberto`, `Rios de la Rosa`, `21-12-2000`, `Hombre`, 79074751, 'alu0101235929@ull.edu.es');
  describe('Prueba de un objeto de la clase estudiante', () => { 
    it('Se puede instanciar un objeto, distinto a null', () => {
      expect(persona3).not.to.be.equal(null);
    });
    describe('Probando los getters', () => {
      it('persona3.getNombre() returns Alberto', () => {
        expect(persona3.getNombre()).to.be.equal('Alberto');
      });
      it('persona3.getApellidos() returns Rios de la Rosa', () => {
        expect(persona3.getApellidos()).to.be.equal('Rios de la Rosa');
      });
      it('persona3.getFechaNacimiento() returns 21-12-2000', () => {
        expect(persona3.getFechaNacimiento()).to.be.equal('21-12-2000');
      });
      it('persona3.getGenero() returns Hombre', () => {
        expect(persona3.getGenero()).to.be.equal('Hombre');
      });
      it('persona3.getDni() returns 79074751', () => {
        expect(persona3.getDni()).to.be.equal(79074751);
      });

      it('persona3.getAlu() returns alu0101235929@ull.edu.es', () => {
        expect(persona3.getAlu()).to.be.equal('alu0101235929@ull.edu.es');
      });
    });
  });

  const persona4 = new Profesor(`Pedro`, `Martinez`, `21-12-1980`, `Hombre`, 87654321, 'aluprofesor@ull.edu.es');
  describe('Prueba de un objeto de la clase profesor', () => {
    it('Se puede instanciar un objeto, distinto a null', () => {
      expect(persona4).not.to.be.equal(null);
    });
  });

  const asignatura1 = new Asignatura('DSI', [persona4], [persona3]);
  describe('Prueba de un objeto de la clase asignatura', () => {
    it('Se puede instanciar un objeto, distinto a null', () => {
      expect(asignatura1).not.to.be.equal(null);
    });
    /* describe('Getters de la clase', () => {
      it('Se puede instanciar un objeto, distinto a null', () => {
        expect(asignatura1.getProfesores).to.be.equal(persona4);
      });
    });
  });
}); */
