import {Persona} from "../ejercicio-clase/persona";
/**
 * Clase profesor que hereda de la clase persona sus datos
 */
export class Estudiante extends Persona {
  /**
   * Constructor de la clase
   * @param nombre Nombre del estudiante
   * @param apellidos Apellidos del estudiante
   * @param fechaNacimiento Fecha nacimiento estudiante
   * @param genero Genero del estudiante
   * @param dni DNI del estudiante
   * @param alu Correo del estudiante
   */
  constructor(protected nombre: string, protected apellidos: string, protected fechaNacimiento: string, protected genero: string, protected dni: number, private alu: string) {
    super(nombre, apellidos, fechaNacimiento, genero, dni);
    this.alu = alu;
  }

  /**
   * Funcion getAlu() para obtener el correo
   * @returns Correo del estudiante
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
