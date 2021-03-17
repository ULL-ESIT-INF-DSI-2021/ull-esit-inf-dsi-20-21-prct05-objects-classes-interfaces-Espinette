/**
 * Clase persona que contiene los datos de una persona
 */
export class Persona {
  /**
   * Constructor de la persona
   * @param nombre Nombre de la persona
   * @param apellidos Apellidos de la persona
   * @param fechaNacimiento Fecha de nacimiento de la persona
   * @param genero Genero de la persona
   * @param dni Dni de las personas
   * Ejemplo de creacion de las personas
   * ```TypeScript
   *   const persona1 = new Persona(`Alberto`, `Rios de la Rosa`, `21-12-2000`, `Hombre`, 79074751);
   * ```
   */
  constructor(protected nombre: string, protected apellidos: string, protected fechaNacimiento: string, protected genero: string, protected dni: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.dni = dni;
  }

  /**
   * Funcion getNombre()
   * @returns Nombre de la persona
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * Funcion setNombre()
   * @param nombre Nombre a introducir
   */
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * Funcion getApellidos()
   * @returns Apellidos de la personas
   */
  public getApellidos() {
    return this.apellidos;
  }

  /**
   * Funcion setApellidos()
   * @param apellidos Apellidos a introducir
   */
  public setApellidos(apellidos: string) {
    this.apellidos = apellidos;
  }

  /**
   * Funcion getFechaNacimiento()
   * @returns Fecha de nacimiento de la persona
   */
  public getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  /**
   * Funcion setFechaNacimiento()
   * @param fecha Fecha a introducir
   */
  public setFechaNacimiento(fecha: string) {
    this.fechaNacimiento = fecha;
  }

  /**
   * Funcion getGenero()
   * @returns El genero de la persona
   */
  public getGenero() {
    return this.genero;
  }

  /**
   * Funcion setGenero()
   * @param genero Genero a introducir
   */
  public setGenero(genero: string) {
    this.genero = genero;
  }

  /**
   * Funcion getDni()
   * @returns DNI de la persona
   */
  public getDni() {
    return this.dni;
  }

  /**
   * Funcion setDni()
   * @param dni DNI a introducir
   */
  public setDni(dni: number) {
    this.dni = dni;
  }
}

