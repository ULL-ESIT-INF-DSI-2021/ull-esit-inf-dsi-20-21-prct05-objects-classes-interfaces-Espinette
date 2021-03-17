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

  public setNombre(a: string) {
    this.nombre = a;
  }

  public getApellidos() {
    return this.apellidos;
  }

  public setApellidos(a: string) {
    this.apellidos = a;
  }

  public getFechaNacimiento() {
    return this.fechaNacimiento;
  }

  public setFechaNacimiento(fecha: string) {
    this.fechaNacimiento = fecha;
  }

  public getGenero() {
    return this.genero;
  }

  public setGenero(a: string) {
    this.genero = a;
  }

  public getDni() {
    return this.dni;
  }

  public setDni(a: number) {
    this.dni = a;
  }
}
