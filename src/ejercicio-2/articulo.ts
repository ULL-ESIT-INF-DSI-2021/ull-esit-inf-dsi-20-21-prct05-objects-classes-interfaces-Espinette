export class Articulo {
  constructor(public titulo: string, public autor: string[], public email: string[], public keywords: string[], public resumen: string, public fecha: string, public editorial: string, public cita: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.email = email;
    this.keywords = keywords;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.cita = cita;
  }

  public getTitulo() {
    return this.titulo;
  }

  public setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  public getAutor() {
    return this.autor;
  }

  public setAutor(autor: string[]) {
    this.autor = autor;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string[]) {
    this.email = email;
  }

  public getKeywords() {
    return this.keywords;
  }

  public setKeywords(keywords: string[]) {
    this.keywords = keywords;
  }

  public getResumen() {
    return this.resumen;
  }

  public setResumen(resumen: string) {
    this.resumen = resumen;
  }

  public getFecha() {
    return this.fecha;
  }

  public setFecha(fecha: string) {
    this.fecha = fecha;
  }

  public getEditorial() {
    return this.editorial;
  }

  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }

  public getCita() {
    return this.cita;
  }

  public setCita(cita: number) {
    this.cita = cita;
  }
  
  public formatoAPA(): string {
    let texto: string = '';
    const autores: string[] = [];
    for (let i: number = 0; i < this.autor.length; i++) autores[i] = this.autor[i];
    while (autores.length > 2) texto += autores.shift() + ', ';
    if (autores.length == 1) {
      texto += autores.shift() + '. ';
    } else {
      texto += autores.shift() + ' y ' + autores.shift() + '. ';
    }
    texto += '(' + this.fecha + '). ' + this.titulo + '. ' + this.editorial + '.';
    return texto;
  }
}
