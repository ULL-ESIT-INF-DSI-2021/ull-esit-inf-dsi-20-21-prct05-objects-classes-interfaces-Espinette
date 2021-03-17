export class Pokemon {
  private datosBasicos = {
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    hp: 0,
  }
  constructor(private nombre: string, private peso: number, private altura: number, private tipo: string, datosBasicos: number[]) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.datosBasicos.ataque = datosBasicos[0];
    this.datosBasicos.defensa = datosBasicos[1];
    this.datosBasicos.velocidad = datosBasicos[2];
    this.datosBasicos.hp = datosBasicos[3];
  }

  public getNombre() {
    return this.nombre;
  }

  public getPeso() {
    return this.peso;
  }

  public getAltura() {
    return this.altura;
  }

  public getTipo() {
    return this.tipo;
  }

  public getDatosBasicos() {
    return this.datosBasicos;
  }

  public setHp(vida: number) {
    this.datosBasicos.hp = vida;
  }
}
