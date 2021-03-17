import {Pokemon} from '../ejercicio-1/pokemon';

export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  public getCombate() {
    return (`Los pokemons son ${this.pokemon1.getNombre()} y ${this.pokemon2.getNombre()}`);
  }

  public dañoPokemon(atacante: number) {
    let efectividad: number = 0;
    let daño: number = 0;
    switch (this.pokemon1.getTipo()) {
      case `Fuego`:
        if (this.pokemon2.getTipo() == `Hierba`) {
          efectividad = 2;
        } else if (this.pokemon2.getTipo() == `Electrico`) {
          efectividad = 1;
        } else {
          efectividad = 0.5;
        }
        break;
      case `Hierba`:
        if (this.pokemon2.getTipo() == `Agua`) {
          efectividad = 2;
        } else if (this.pokemon2.getTipo() == `Electrico`) {
          efectividad = 1;
        } else {
          efectividad = 0.5;
        }
        break;
      case `Electrico`:
        if (this.pokemon2.getTipo() == `Agua`) {
          efectividad = 2;
        } else if ((this.pokemon2.getTipo() == `Fuego`) || (this.pokemon2.getTipo() == `Hierba`)) {
          efectividad = 1;
        } else {
          efectividad = 0.5;
        }
        break;
      case `Agua`:
        if (this.pokemon2.getTipo() == `Fuego`) {
          efectividad = 2;
        } else {
          efectividad = 0.5;
        }
        break;
    }
    if (atacante == 1) {
      if (efectividad == 2) efectividad = 0.5;
      if (efectividad == 0.5) efectividad = 2;
      daño = 50 * (this.pokemon2.getDatosBasicos().ataque / this.pokemon1.getDatosBasicos().defensa) * efectividad;
      return Math.trunc(daño);
    } else {
      daño = 50 * (this.pokemon1.getDatosBasicos().ataque / this.pokemon2.getDatosBasicos().defensa) * efectividad;
      return Math.trunc(daño);
    }
  }

  public start() {
    let atacante: number = 0;

    console.log(`Van a luchar ${this.pokemon1.getNombre()} y ${this.pokemon2.getNombre()}`);
    console.log();
    console.log(`${this.pokemon1.getNombre()} tiene ${this.pokemon1.getDatosBasicos().hp} de vida`);
    console.log(`${this.pokemon2.getNombre()} tiene ${this.pokemon2.getDatosBasicos().hp} de vida`);
    console.log();

    while ((this.pokemon1.getDatosBasicos().hp > 0) && (this.pokemon2.getDatosBasicos().hp > 0)) {
      if (atacante == 0) {
        console.log(`ATACA: ${this.pokemon1.getNombre().toUpperCase()}`);
        this.pokemon2.setHp((this.pokemon2.getDatosBasicos().hp - this.dañoPokemon(atacante)));
        console.log(`Vida de ${this.pokemon1.getNombre()} restante: ${this.pokemon1.getDatosBasicos().hp}`);
        console.log(`Vida de ${this.pokemon2.getNombre()} restante: ${this.pokemon2.getDatosBasicos().hp}`);
        console.log();
        atacante = 1;
      } else {
        console.log(`ATACA: ${this.pokemon2.getNombre().toUpperCase()}`);
        this.pokemon1.setHp((this.pokemon1.getDatosBasicos().hp - this.dañoPokemon(atacante)));
        console.log(`Vida de ${this.pokemon1.getNombre()} restante: ${this.pokemon1.getDatosBasicos().hp}`);
        console.log(`Vida de ${this.pokemon2.getNombre()} restante: ${this.pokemon2.getDatosBasicos().hp}`);
        console.log();
        atacante = 0;
      }
    }
    console.log();
    if (this.pokemon1.getDatosBasicos().hp < 0) {
      console.log(`GANADOR ${this.pokemon2.getNombre()}!!!!!!!`);
      return this.pokemon2.getNombre();
    } else {
      console.log(`GANADOR ${this.pokemon1.getNombre()}!!!!!!!`);
      return this.pokemon1.getNombre();
    }
  }
}
