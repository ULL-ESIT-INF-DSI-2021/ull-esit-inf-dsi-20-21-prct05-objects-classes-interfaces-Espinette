import {Articulo} from './articulo';

export class GestorBibliografico {
  constructor(public articulos: Articulo[]) {
  }

  public printData() {
    console.table(this.articulos, ['titulo', 'autor', 'editorial']);
    // console.table(this.articulos, ['titulo', 'autor', 'email', 'keywords', 'abstract', 'fecha', 'editorial', 'quotes']);
  }

  public search(keywords: string[], filter: string[]): Articulo[] {
    const numbers: number[] = [];
    for (let i: number = 0; i < keywords.length; i++) {
      for (let j: number = 0; j < this.articulos.length; j++) {
        for (let t: number = 0; t < filter.length; t++) {
          if (filter[t] == 'keywords') {
            for (let z: number = 0; z < this.articulos[j].keywords.length; z++) {
              if (this.articulos[j].keywords[z] == keywords[i]) {
                numbers.push(j);
              }
            }
          }
          if (filter[t] == 'fecha') {
            if (this.articulos[j].fecha == keywords[i]) {
              numbers.push(j);
            }
          }
          if (filter[t] == 'autor') {
            for (let z: number = 0; z < this.articulos[j].autor.length; z++) {
              if (this.articulos[j].autor[z] == keywords[i]) {
                numbers.push(j);
              }
            }
          }

          if (filter[t] == 'editorial') {
            if (this.articulos[j].editorial == keywords[i]) {
              numbers.push(j);
            }
          }
        }
      }
    }
    for (let i = numbers.length -1; i >=0; i--) {
      if (numbers.indexOf(numbers[i]) !== i) numbers.splice(i, 1);
    }

    const result: Articulo[] = [];
    while (numbers.length > 0) {
      result.push(this.articulos[numbers[0]]);
      numbers.shift();
    }
    console.table(result, ['titulo', 'autor', 'editorial']);
    return result;
  }

  public export(exportSearch: Articulo[]): string[] {
    const array: string[] = [];
    for (let i: number = 0; i < exportSearch.length; i++) {
      array.push(exportSearch[i].formatoAPA());
      console.log(array[i]);
    }
    return array;
  }
}
