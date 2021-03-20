import {Coche} from '../ejercicio-3/coche';
import {Moto} from './moto';
import {Patinete} from './patinete';
import {Tren} from './trenes';
import {Guagua} from './guaguas';
import {Bicicleta} from './bicicletas';
import {Peaton} from './peaton';
import {Vehiculo} from './vehiculo';

/**
 * Clase street para definir la calle y los coches en estos
 */
export class Street {
  /**
   * Constructor de la clase
   * @param nombreCalle Nombre de la calle
   * @param localidad Localidad de la calle
   * @param vehiculos vector de vehiculos que hay en la calle
   * Crear un objeto
   * ```TypeScript
   * let Calle = New Calle(nombre, localidad, vehiculo[]);
   * ```
   */
  constructor(private nombreCalle: string, private localidad: string, private vehiculos: Vehiculo[]) {
    this.nombreCalle = nombreCalle;
    this.localidad = localidad;
    this.vehiculos = vehiculos;
  }

  /**
   * Funcion getCalle()
   * @returns El nombre de la calle
   */
  public getCalle() {
    return this.nombreCalle;
  }

  /**
   * Funcion setCalle()
   * @param nombreCalle Nombre a introducir
   */
  public setCalle(nombreCalle: string) {
    this.nombreCalle = nombreCalle;
  }

  /**
   * Funcion getlocalidad()
   * @returns El nombre de la localidad
   */
  public getLocalidad() {
    return this.localidad;
  }

  /**
   * Funcion setLocalidad()
   * @param localidad Localidad a introducir
   */
  public setLocalidad(localidad: string) {
    this.localidad = localidad;
  }

  /**
   * Funcion para mostrar los vehiculos
   */
  public mostrarVehiculos() {
    console.table(this.vehiculos);
  }

  /**
   * Funcion para contar los distintos tipos de vehiculos en la calle
   */
  public contVehiculos() {
    let contCoche: number = 0;
    let contMoto: number = 0;
    let contTren: number = 0;
    let contPatinete: number = 0;
    let contPeaton: number = 0;
    let contGuagua: number = 0;
    let contBicicleta: number = 0;

    this.vehiculos.forEach((elemento) => {
      if ( elemento instanceof Coche) {
        contCoche++;
      }
      if ( elemento instanceof Moto) {
        contMoto++;
      }
      if ( elemento instanceof Tren) {
        contTren++;
      }
      if ( elemento instanceof Patinete) {
        contPatinete++;
      }
      if ( elemento instanceof Peaton) {
        contPeaton++;
      }
      if ( elemento instanceof Guagua) {
        contGuagua++;
      }
      if ( elemento instanceof Bicicleta) {
        contBicicleta++;
      }
    });
    console.log(`Vehiculos en la calle:`);
    console.log(` Coches: ${contCoche}`);
    console.log(` Motos: ${contMoto}`);
    console.log(` Tren: ${contTren}`);
    console.log(` Patinete: ${contPatinete}`);
    console.log(` Peaton: ${contPeaton}`);
    console.log(` Guagua: ${contGuagua}`);
    console.log(` Bicicleta: ${contBicicleta}`);
  }

  /**
   * Funcion add vehiculo
   * @param vehiculo Vehiculo a añadir
   */
  public addVehiculo(vehiculo: Vehiculo) {
    this.vehiculos.push(vehiculo);
  }

  /**
   * Funcion remove vehiculo
   * @param vehiculo Vehiculo a borrar
   */
  public removeVehiculo(vehiculo: Vehiculo) {
    const eliminar: number = this.vehiculos.indexOf(vehiculo);
    this.vehiculos.splice(eliminar, 1);
  }

  /**
   * Funcion ordenar por velocidad los vehiculos
   */
  public velocity() {
    let aux: Vehiculo;
    let pos: number;
    for (let i: number = 1; i < this.vehiculos.length; i++) {
      pos = i - 1;
      aux = this.vehiculos[i];
      while ((this.vehiculos[pos].velocidad >= aux.velocidad) && (pos > 0)) {
        this.vehiculos[pos + 1] = this.vehiculos[pos];
        pos = pos - 1;
      }
      this.vehiculos[pos + 1] = aux;
    }
  }
}
