import {Persona} from "../ejercicio-clase/persona";

/**
 * Clase profesor que hereda de la clase persona sus datos
 */
export class Profesor extends Persona {
  /**
   * Constructor de la clase
   * @param nombre Nombre del profesor
   * @param apellidos Apellidos del profesor
   * @param fechaNacimiento Fecha nacimiento profesor
   * @param genero Genero del profesor
   * @param dni DNI del profesor
   * @param alu Correo del profesor
   */
  constructor( nombre: string, apellidos: string, fechaNacimiento: string, genero: string, dni: number, private alu: string) {
    super(nombre, apellidos, fechaNacimiento, genero, dni);
    this.alu = alu;
  }

  /**
   * Funcion getAlu() para obtener el correo
   * @returns Correo del profesor
   */
  public getAlu() {
    return this.alu;
  }

  /**
   * Funcion setAlu() para introducir el correo
   * @param alu correo introducido
   */
  public setAlu(alu: string) {
    this.alu = alu;
  }
}
