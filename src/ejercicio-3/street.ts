import {Coche} from '../ejercicio-3/coche';
import {Moto} from './moto';
import {Patinete} from './patinete';
import {Tren} from './trenes';
import {Guagua} from './guaguas';
import {Bicicleta} from './bicicletas';
import {Peaton} from './peaton';
import {Vehiculo} from './vehiculo';

export class Street {
  constructor(private nombreCalle: string, private localidad: string, private vehiculos: Vehiculo[]) {
    this.nombreCalle = nombreCalle;
    this.localidad = localidad;
    this.vehiculos = vehiculos;
  }

  public getCalle() {
    return this.nombreCalle;
  }

  public setCalle(nombreCalle: string) {
    this.nombreCalle = nombreCalle;
  }

  public getLocalidad() {
    return this.localidad;
  }

  public setLocalidad(localidad: string) {
    this.localidad = localidad;
  }

  public mostrarVehiculos() {
    console.table(this.vehiculos);
  }

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
}
