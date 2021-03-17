export class Persona {
  constructor(private nombre: string, private apellidos: string, private fechaNacimiento: string, private genero: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
  }
}
