export class Articulo {
  constructor(private titulo: string, private autor: string[], private email: string[], private keywords: string[], private resumen: string, private fecha: string, private editorial: string, private cita: number) {
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
    let i: number = 0;
    this.autor.forEach((autor) => {
      if (i > 0) {
        if (i = this.autor.length - 1) {
          texto = texto + ' y ' + autor + '.';
        } else {
          texto = texto + ',' + autor + '.';
        }
      }
      if (i == 0) {
        texto = autor;
      }
      i++;
    });
    texto += ' (' + this.fecha + '). ' + this.titulo + '. ' + this.editorial + '.';
    return texto;
  }
}
