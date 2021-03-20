import {Vehiculo} from "./vehiculo";

/**
 * Clase bicicleta hija de la clase vehiculo
 */
export class Bicicleta extends Vehiculo {
  /**
   * Constructor de la clase
   * @param nombre Nombre de la bici
   * @param velocidad Velocidad a la que circula
   * @param ruedas Ruedas con las que circula
   * @param aforo Aforo permitido
   * Se inician con la llamada super al ser heredados
   * Crear un objeto
   * ```TypeScript
   * let Bicicleta = new Bicicleta(nombre, velocidad, ruedas, aforo);
   * ```
   */
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}
