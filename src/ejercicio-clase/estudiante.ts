import {Persona} from "../ejercicio-clase/persona";

export class Estudiante extends Persona {
  constructor(protected nombre: string, protected apellidos: string, protected fechaNacimiento: string, protected genero: string, protected dni: number, private alu: string) {
    super(nombre, apellidos, fechaNacimiento, genero, dni);
    this.alu = alu;
  }
}