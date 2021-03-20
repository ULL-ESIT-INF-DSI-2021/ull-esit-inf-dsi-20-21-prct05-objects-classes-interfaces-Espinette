import {Movable} from "./movable";

/**
 * Clase vehiculo que hereda la interfaz movable
 */
export class Vehiculo implements Movable {
  /**
   * Constructor de la clase con parámetros públicos al ser heredados de movable
   * @param nombre Nombre del vehiculo
   * @param velocidad Velocidad a la que circula
   * @param ruedas Ruedas con las que circula
   * @param aforo Aforo permitido
   * Crear un objeto
   * ```TypeScript
   * let Vehiculo = new Vehiculo(nombre, velocidad, ruedas, aforo);
   * ```
   */
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.aforo = aforo;
  }
}
