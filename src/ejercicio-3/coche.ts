import {Movable} from "./ejercicio-3";

export class Coche implements Movable {
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public capacidad: number, public color: string) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.capacidad = capacidad;
    this.color = color;
  }
}
