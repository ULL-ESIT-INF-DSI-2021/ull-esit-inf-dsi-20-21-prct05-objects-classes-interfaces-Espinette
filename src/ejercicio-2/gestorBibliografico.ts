import {Articulo} from './articulo';

export class GestorBibliografico {
  constructor(public articulos: Articulo[]) {
  }

  public mostrarArticulos() {
    console.table(this.articulos);
  }

  public search(keywords: string[], filtrar: string[]) {
    const numero: number[] = [];
    for (let i: number = 0; i < keywords.length; i++) {
      for (let j: number = 0; j < this.articulos.length; j++) {
        for (let t: number = 0; t < filtrar.length; t++) {
          if (filtrar[t] == 'keywords') {
            for (let z: number = 0; z < this.articulos[j].getKeywords().length; z++) {
              if (this.articulos[j].getKeywords()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }
          if (filtrar[t] == 'fecha') {
            if (this.articulos[j].getFecha() == keywords[i]) {
              numero.push(j);
            }
          }
          if (filtrar[t] == 'autor') {
            for (let z: number = 0; z < this.articulos[j].getAutor().length; z++) {
              if (this.articulos[j].getAutor()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }

          if (filtrar[t] == 'editorial') {
            if (this.articulos[j].getEditorial() == keywords[i]) {
              numero.push(j);
            }
          }
        }
      }
    }
    for (let i = numero.length -1; i >=0; i--) {
      if (numero.indexOf(numero[i]) !== i) numero.splice(i, 1);
    }

    const result: Articulo[] = [];
    while (numero.length > 0) {
      result.push(this.articulos[numero[0]]);
      numero.shift();
    }
    console.table(result, ['titulo', 'autor', 'editorial']);
    const array: string[] = [];
    for (let i: number = 0; i < result.length; i++) {
      array.push(result[i].formatoAPA());
      console.log(array[i]);
    }
    return array;
  }

  public export(exportSearch: Articulo[]) {
    const array: string[] = [];
    for (let i: number = 0; i < exportSearch.length; i++) {
      array.push(exportSearch[i].formatoAPA());
      console.log(array[i]);
    }
  }
}
