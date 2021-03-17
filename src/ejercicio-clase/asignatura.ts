import {Profesor} from "../ejercicio-clase/profesor";
import {Estudiante} from "../ejercicio-clase/estudiante";
/**
 * Clase asignatura
 */
export class Asignatura {
  /**
   * Constructor de la clase
   * @param nombre Nombre de la asignatura
   * @param profesores Array de los profesores que la imparten
   * @param estudiantes Array de los estudiantes que la cursan
   */
  constructor(private nombre: string, private profesores: Profesor[], private estudiantes: Estudiante[]) {
    this.nombre = nombre;
    this.profesores = profesores;
    this.estudiantes = estudiantes;
  }

  /**
   * Funcion getNombre() devuelve el nombre del objeto
   * @returns Nombre asignatura
   */
  public getNombre() {
    return this.nombre;
  }

  /**
   * Funcion setNombre() para introducir el nombre
   * @param nombre Nombre de la asignatura
   */
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  /**
   * Funcion getProfesores() para obtener el listado de profesores
   * @returns Profesores
   */
  public getProfesores() {
    return this.profesores;
  }

  public setProfesores(profesor: Profesor) {
    this.profesores.push(profesor);
  }

  /**
   * Funcion getEstudiantes() para obtener el listado de Estudiantes
   * @returns Array de estudiantes
   */
  public getEstudiantes() {
    return this.estudiantes;
  }

  public setEstudiantes(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
  }
}
