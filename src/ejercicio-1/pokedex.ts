import {Pokemon} from '../ejercicio-1/pokemon';

/**
 * Clase Pokedex, contiene los pokemones disponibles
 */
export class Pokedex {
  /**
   * Constructor de la clase
   * @param baseDatosPokemon Un vector infinito con los pokemons que tengo
   */
  constructor(private baseDatosPokemon: Pokemon[]) {
    this.baseDatosPokemon = baseDatosPokemon;
  }

  /**
   * Función getPokedex()
   * @returns Retorna la pokedex entera
   */
  public getPokedex() {
    return this.baseDatosPokemon;
  }

  /**
   * Funcion setPokemon()
   * @param pokemon Pokemon a introducir en la pokedex
   */
  public setPokemon(pokemon: Pokemon) {
    this.baseDatosPokemon.push(pokemon);
  }

  /**
   * Funcion finPokemon()
   * @param pokemon Pokemon a buscar en la pokedex
   * @returns El Pokemon con sus datos
   */
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
