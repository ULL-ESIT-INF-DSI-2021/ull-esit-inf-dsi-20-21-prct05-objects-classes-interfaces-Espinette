import {Pokemon} from '../ejercicio-1/pokemon';

export class Pokedex {
  constructor(private baseDatosPokemon: Pokemon[]) {
    this.baseDatosPokemon = baseDatosPokemon;
  }

  public getPokedex() {
    return this.baseDatosPokemon;
  }

  public setPokemon(pokemon: Pokemon) {
    this.baseDatosPokemon.push(pokemon);
  }

  public findPokemon(pokemon: Pokemon) {
    let pos: number = -1;
    this.baseDatosPokemon.forEach((i) => {
      if (i == pokemon) {
        pos = this.baseDatosPokemon.indexOf(i);
      }
    });
    if (pos == -1) {
      return 'No se encuentra al pokemon en la pokedex';
    }
    return this.baseDatosPokemon[pos];
  }
}
