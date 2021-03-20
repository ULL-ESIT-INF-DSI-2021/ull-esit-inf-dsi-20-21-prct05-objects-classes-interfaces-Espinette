import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';

describe(`EJERCICIO 1 - POKEDEX`, () => {
  const Bulbasaur: Pokemon = new Pokemon("Bulbasaur", 6.9, 0.7, "Hierba", [49, 49, 45, 318]);
  const Charmander: Pokemon = new Pokemon("Charmander", 8.5, 0.6, "Fuego", [52, 43, 65, 309]);
  const Squirtle: Pokemon = new Pokemon("Squirtle", 9, 0.5, "Agua", [48, 65, 43, 314]);
  const Seel: Pokemon = new Pokemon("Seel", 90, 1.1, "Agua", [45, 55, 45, 325]);

  const Poke = new Pokedex([]);
  Poke.setPokemon(Bulbasaur);
  Poke.setPokemon(Charmander);
  Poke.setPokemon(Squirtle);
  Poke.setPokemon(Seel);

  const Combate = new Combat(Seel, Bulbasaur);

  describe('Probar llamadas a un objeto de la clase Pokemon', () => {
    it('Bulbasaur.getNombre() returns value Bulbasur', () => {
      expect(Bulbasaur.getNombre()).to.be.equal(`Bulbasaur`);
    });

    it('Bulbasaur.getAltura() returns value 0.7', () => {
      expect(Bulbasaur.getAltura()).to.be.equal(0.7);
    });

    it('Bulbasaur.getPeso() returns value 6.9', () => {
      expect(Bulbasaur.getPeso()).to.be.equal(6.9);
    });

    it('Bulbasaur.getTipo() returns value Hierba', () => {
      expect(Bulbasaur.getTipo()).to.be.equal('Hierba');
    });

    it('Bulbasaur.getDatosBasicos().ataque returns value 49', () => {
      expect(Bulbasaur.getDatosBasicos().ataque).to.be.equal(49);
    });

    it('Bulbasaur.getDatosBasicos().defensa returns value 49', () => {
      expect(Bulbasaur.getDatosBasicos().defensa).to.be.equal(49);
    });

    it('Bulbasaur.getDatosBasicos().velocidad returns value 45', () => {
      expect(Bulbasaur.getDatosBasicos().velocidad).to.be.equal(45);
    });

    it('Bulbasaur.getDatosBasicos().hp returns value 318', () => {
      expect(Bulbasaur.getDatosBasicos().hp).to.be.equal(318);
    });
  });

  describe('Probar llamadas a un objeto de la clase Pokedex', () => {
    it('Poke.getPokedex() returns value not null, se puede crear un tipo pokedex', () => {
      expect(Poke.getPokedex()).not.to.be.equal(null);
    });

    it('Poke.findPokemon(Bulbasaur) returns Bulbasaur, se encuentra pokemon en la pokedex', () => {
      expect(Poke.findPokemon(Bulbasaur)).to.be.equal(Bulbasaur);
    });

    it('Poke.findPokemon(Seel) returns Seel, se encuentra pokemon en la pokedex', () => {
      expect(Poke.findPokemon(Seel)).to.be.equal(Seel);
    });

    it('Mostrar la pokedex', () => {
      Poke.mostrarPokedex();
    });
  });

  describe('Probar llamada a un objeto de la clase Combat', () => {
    it('Combate.getCombate() returns los pokemons son Seel y Bulbasaur', () => {
      expect(Combate.getCombate()).to.be.equal(`Los pokemons son Seel y Bulbasaur`);
    });

    it('Combate.dañoPokemon(0) returns daño Seel a Bulbasaur que es 22', () => {
      expect(Combate.dañoPokemon(0)).to.be.equal(22);
    });

    it('Combate.dañoPokemon(1) returns daño Bulbasaur a Seel que es 89', () => {
      expect(Combate.dañoPokemon(1)).to.be.equal(89);
    });

    it('Combate.start() returns ganador combate que es: Bulbasaur', () => {
      expect(Combate.start()).to.be.equal(`Bulbasaur`);
    });
  });
});

