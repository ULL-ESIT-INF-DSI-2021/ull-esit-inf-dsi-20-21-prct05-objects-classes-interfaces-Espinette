import {Vehiculo} from "./vehiculo";

export class Patinete extends Vehiculo {
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}
