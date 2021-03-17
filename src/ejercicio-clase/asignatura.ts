import {Profesor} from "../ejercicio-clase/profesor";
import {Estudiante} from "../ejercicio-clase/estudiante";

export class Asignatura {
  constructor(private nombre: string, private profesores: Profesor[], private estudiantes: Estudiante[]) {
    this.nombre = nombre;
    this.profesores = profesores;
    this.estudiantes = estudiantes;
  }
}
