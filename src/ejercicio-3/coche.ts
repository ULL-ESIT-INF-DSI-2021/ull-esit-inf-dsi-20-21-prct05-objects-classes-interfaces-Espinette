import {Vehiculo} from "./vehiculo";

/**
 * Clase coche hija de la clase vehiculo
 */
export class Coche extends Vehiculo {
  /**
   * Constructor de la clase
   * @param nombre Nombre del coche
   * @param velocidad Velocidad a la que circula
   * @param ruedas Ruedas con las que circula
   * @param aforo Aforo permitido
   * Se inician con la llamada super al ser heredados
   * Crear un objeto
   * ```TypeScript
   * let Coche = new Coche(nombre, velocidad, ruedas, aforo);
   * ```
   */
  constructor(public nombre: string, public velocidad: number, public ruedas: number, public aforo: number) {
    super(nombre, velocidad, ruedas, aforo);
  }
}

