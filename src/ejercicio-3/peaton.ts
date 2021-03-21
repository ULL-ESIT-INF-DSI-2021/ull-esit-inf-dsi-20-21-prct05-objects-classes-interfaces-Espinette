import {Vehiculo} from "./vehiculo";

/**
 * Clase peaton hija de la clase vehiculo
 */
export class Peaton extends Vehiculo {
  /**
   * Constructor de la clase
   * @param nombre Nombre del peaton
   * @param velocidad Velocidad a la que circula
   * @param ruedas Ruedas con las que circula
   * @param aforo Aforo permitido
   * Se inician con la llamada super al ser heredados
   * Crear un objeto
   * ```TypeScript
   * let Peaton = new Peaton(nombre, velocidad, ruedas, aforo);
   * ```
   */
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}