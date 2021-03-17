import {Movable} from "./movable";

export class Tren implements Movable {
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number, public color: string) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.aforo = aforo;
    this.color = color;
  }
}
