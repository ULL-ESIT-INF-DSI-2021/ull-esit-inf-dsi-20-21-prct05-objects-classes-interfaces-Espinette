export class Persona {
  constructor(private nombre: string, private apellidos: string, private fechaNacimiento: string, private genero: string, private dni: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.dni = dni;
  }

  public getNombre() {
    return this.nombre;
  }

  public getApellidos() {
    return this.apellidos;
  }

  public getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  public getGenero() {
    return this.genero;
  }

  public getDni() {
    return this.dni;
  }
}