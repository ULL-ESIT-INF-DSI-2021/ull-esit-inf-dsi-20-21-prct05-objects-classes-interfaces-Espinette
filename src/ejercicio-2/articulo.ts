
/**
 * Clase articulo
 */
export class Articulo {
  /**
   * Constructor para iniciar un objeto articulo
   * @param titulo Titulo
   * @param autor Autor o autores
   * @param email Correo del autor o autores
   * @param keywords Palabras claves para filtrar
   * @param resumen Resumen breve
   * @param fecha Fecha de publicacion
   * @param editorial Editorial
   * @param cita Visualizaciones del articulo
   */
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

  /**
   * Funcion para obtener el titulo
   * @returns Titulo del articulo
   */
  public getTitulo() {
    return this.titulo;
  }

  /**
   * Funcion para establecer un titulo
   * @param titulo Titulo a establecer
   */
  public setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  /**
   * Funcion para obtener el autor
   * @returns Autor del articulo
   */
  public getAutor() {
    return this.autor;
  }

  /**
   * Funcion para establecer un autor
   * @param autor Autor a establecer
   */
  public setAutor(autor: string[]) {
    this.autor = autor;
  }

  /**
   * Funcion para obtener el email de los autores
   * @returns Email de autores del articulo
   */
  public getEmail() {
    return this.email;
  }

  /**
   * Funcion para establecer un email
   * @param email Email a establecer
   */
  public setEmail(email: string[]) {
    this.email = email;
  }

  /**
   * Funcion para obtener las palabras clave
   * @returns Palabras clave del articulo
   */
  public getKeywords() {
    return this.keywords;
  }

  /**
   * Funcion para establecer palabras claves
   * @param keywords Palabras clave a establecer
   */
  public setKeywords(keywords: string[]) {
    this.keywords = keywords;
  }

  /**
   * Funcion para obtener el resumen
   * @returns Resumen del articulo
   */
  public getResumen() {
    return this.resumen;
  }

  /**
   * Funcion para establecer un resumen
   * @param resumen Resumen a establecer
   */
  public setResumen(resumen: string) {
    this.resumen = resumen;
  }

  /**
   * Funcion para obtener la fecha de publicacion
   * @returns Fecha de publicacion del articulo
   */
  public getFecha() {
    return this.fecha;
  }

  /**
   * Funcion para establecer una fecha
   * @param fecha Fecha a establecer
   */
  public setFecha(fecha: string) {
    this.fecha = fecha;
  }

  /**
   * Funcion para obtener el editorial
   * @returns Editorial del articulo
   */
  public getEditorial() {
    return this.editorial;
  }

  /**
   * Funcion para establecer una editorial
   * @param editorial Editorial a establecer
   */
  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }

  /**
   * Funcion para obtener la cita
   * @returns Cita del articulo
   */
  public getCita() {
    return this.cita;
  }

  /**
   * Funcion para establecer una cita
   * @param cita Cita a establecer
   */
  public setCita(cita: number) {
    this.cita = cita;
  }

  /**
   * Funcion formato APA
   * @returns El articulo en dicho formato
   */
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
