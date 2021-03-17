import {Persona} from "../ejercicio-clase/persona";

export class Profesor extends Persona {
  constructor(protected nombre: string, protected apellidos: string, protected fechaNacimiento: string, protected genero: string, protected dni: number, private alu: string) {
    super(nombre, apellidos, fechaNacimiento, genero, dni);
    this.alu = alu;
  }

  public getAlu() {
    return this.alu;
  }

  public setAlu(alu: string) {
    this.alu = alu;
  }
}
