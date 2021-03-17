import {Movable} from "./movable";

export class Peaton implements Movable {
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.aforo = aforo;
  }
}
