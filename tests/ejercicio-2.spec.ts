import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {GestorBibliografico} from '../src/ejercicio-2/gestorBibliografico';

describe('EJERCICIO 2 - GESTOR BIBLIOGRAFICO', () => {
  const articulo1 = new Articulo('La selección Española de futbol convoca a Pedri', ['Eduardo Medina', 'Alberto Espinosa'], ['edumedina@gmail.com', 'albertespi6@gmail.com'],
      ['Pedri', 'Española', 'Futbol'], 'Luis Enrique convoca a Pedri para la seleccion absoluta de futbol', '10-03-2021', 'Marca', 4);
  const articulo2 = new Articulo('Ibai Llanos record de espectadores en directo', ['Manolo Gomez', 'Alberto Espinosa'], ['manologomez@gmail.com', 'albertespi6@gmail.com'],
      ['Ibai', 'Record', 'Directo'], 'Ibai bate el record de espectadores en twitch en un directo', '05-11-2020', 'El mundo', 6);
  const articulo3 = new Articulo('Iker Casillas y Sara Carbonero se divorcian', ['Tomas Rios'], ['tomasrios@gmail.com'], ['Iker', 'Sara', 'Divorcian'], 'Iker y Sara rompen su relacion tras 10 años maravillosos', '25-01-2021', 'Marca', 3);
  const gestor = new GestorBibliografico([articulo1, articulo2, articulo3]);
  describe('Pruebas de la clase artículo', () => {
    it('Se crea un objeto articulo distinto a null', () => {
      expect(articulo1).not.to.be.equal(null);
    });
    describe('Probar getters de la clase artículo', () => {
      it('articulo1.getTitulo() returns La selección Española de futbol convoca a Pedri', () => {
        expect(articulo1.getTitulo()).to.be.equal('La selección Española de futbol convoca a Pedri');
      });
      it('articulo1.getAutor() returns [Eduardo Medina, Alberto Espinosa]', () => {
        expect(articulo1.getAutor()).to.be.deep.equal(['Eduardo Medina', 'Alberto Espinosa']);
      });
      it('articulo1.getEmail() returns [edumedina@gmail.com, albertespi6@gmail.com]', () => {
        expect(articulo1.getEmail()).to.be.deep.equal(['edumedina@gmail.com', 'albertespi6@gmail.com']);
      });
      it('articulo1.getKeywords() returns [Pedri, Española, Futbol]', () => {
        expect(articulo1.getKeywords()).to.be.deep.equal(['Pedri', 'Española', 'Futbol']);
      });
      it('articulo1.getResumen() returns Luis Enrique convoca a Pedri para la seleccion absoluta de futbol', () => {
        expect(articulo1.getResumen()).to.be.equal('Luis Enrique convoca a Pedri para la seleccion absoluta de futbol');
      });
      it('articulo1.getFecha() returns 10-03-2021', () => {
        expect(articulo1.getFecha()).to.be.equal('10-03-2021');
      });
      it('articulo1.getEditorial() returns Marca', () => {
        expect(articulo1.getEditorial()).to.be.equal('Marca');
      });
      it('articulo1.getCita() returns 4', () => {
        expect(articulo1.getCita()).to.be.equal(4);
      });
    });
    describe('Probando formato apa', () => {
      it('articulo1.formatoAPA() returns Eduardo Medina y Alberto Espinosa. (10-03-2021). La selección Española de futbol convoca a Pedri. Marca.', () => {
        expect(articulo1.formatoAPA()).to.be.equal('Eduardo Medina y Alberto Espinosa. (10-03-2021). La selección Española de futbol convoca a Pedri. Marca.');
      });
      it('articulo2.formatoAPA() returns Manolo Gomez y Alberto Espinosa. (05-11-2020). Ibai Llanos record de espectadores en directo. El mundo.', () => {
        expect(articulo2.formatoAPA()).to.be.equal('Manolo Gomez y Alberto Espinosa. (05-11-2020). Ibai Llanos record de espectadores en directo. El mundo.');
      });
    });
  });
  describe('Probando clase GestorBibliografico', () => {
    it('Se crea un objeto gestor bibliografico distinto a null', () => {
      expect(gestor).not.to.be.equal(null);
    });
    it('Se muestra el contenido del gestor bibliográfico', () => {
      gestor.mostrarArticulos();
    });
    it('Buscar articulos segun el filtro keyword = Pedri', () => {
      gestor.search(['Pedri'], ['keywords']);
    });
    it('Exportar resultados de la busqueda en formato APA', () => {
      gestor.export([articulo3]);
    });
  });
});
