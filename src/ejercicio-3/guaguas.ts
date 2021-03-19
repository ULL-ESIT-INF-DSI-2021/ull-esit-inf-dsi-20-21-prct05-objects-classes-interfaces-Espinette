import {Vehiculo} from "./vehiculo";

export class Guagua extends Vehiculo {
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}
