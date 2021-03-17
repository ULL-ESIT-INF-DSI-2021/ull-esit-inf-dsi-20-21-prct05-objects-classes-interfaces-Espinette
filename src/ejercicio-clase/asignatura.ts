import {Profesor} from "../ejercicio-clase/profesor";
import {Estudiante} from "../ejercicio-clase/estudiante";

export class Asignatura {
  constructor(private nombre: string, private profesores: Profesor[], private estudiantes: Estudiante[]) {
    this.nombre = nombre;
    this.profesores = profesores;
    this.estudiantes = estudiantes;
  }
  public getNombre() {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getProfesores() {
    return this.profesores;
  }

  public setProfesores(profesor: Profesor) {
    this.profesores.push(profesor);
  }

  public getEstudiantes() {
    return this.estudiantes;
  }

  public setEstudiantes(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }
}
