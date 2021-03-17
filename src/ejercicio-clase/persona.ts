export class Persona {
  constructor(private nombre: string, private apellidos: string, private fechaNacimiento: string, private genero: string, private dni: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.dni = dni;
  }
}