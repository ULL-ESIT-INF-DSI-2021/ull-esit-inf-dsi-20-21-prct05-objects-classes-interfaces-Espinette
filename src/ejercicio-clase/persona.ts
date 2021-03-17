export class Persona {
  constructor(protected nombre: string, protected apellidos: string, protected fechaNacimiento: string, protected genero: string, protected dni: number) {
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

