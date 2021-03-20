import {Vehiculo} from "./vehiculo";

/**
 * Clase guagua hija de la clase vehiculo
 */
export class Guagua extends Vehiculo {
  /**
   * Constructor de la clase
   * @param nombre Nombre de la guagua
   * @param velocidad Velocidad a la que circula
   * @param ruedas Ruedas con las que circula
   * @param aforo Aforo permitido
   * Se inician con la llamada super al ser heredados
   * Crear un objeto
   * ```TypeScript
   * let Guagua = new Guagua(nombre, velocidad, ruedas, aforo);
   * ```
   */
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}
