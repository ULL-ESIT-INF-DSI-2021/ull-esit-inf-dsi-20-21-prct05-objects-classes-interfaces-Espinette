import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {GestorBibliografico} from '../src/ejercicio-2/gestorBibliografico';

describe('EJERCICIO 2 - GESTOR BIBLIOGRAFICO', () => {
  const articulo1 = new Articulo('La selección Española de futbol convoca a Pedri', ['Eduardo Medina', 'Alberto Espinosa'], ['sudeepthepade@gmail.com', 'piyushrc26@gmail.com'],
      ['Descent', 'Heuristic', 'Knapsack', 'Optimization'],
      'Detecting the appropriate usage of a piece of land is known as Land Usage Mining. The key resource to detect the Land Usages is aerial Images. The advancement in technology in form of satellites, drones, unmanned aerial vehicles do capture the tons of wide land cover images. Aerial images are used for various purposes alias getting an overview to put up the settlement by making construction, extracting mineral deposits, disaster mitigation planning, disaster recovery, and surveillance. Automated land usage identification with help of modern machine learning algorithms may be a great boon to mankind. Different feature extraction methods are being explored to represent aerial image content in the signature form, these features are mainly taken as a global or local content description of the image. Feature Level Fusion of both the global and the local content description features may give a more accurate capability for identification of land usage. The paper proposes feature level fusion of global features extracted using Thepade’s Sorted Block Truncation Coding (Thepade SBTC) and local features extracted using Sauvola Thresholding for land usage identification. Consideration of more than one Machine Learning classifiers as an ensemble has proven better than individual Machine Learning classifiers. Thepade SBTC is explored in aerial image feature extraction with nine variations as TSBTC 2-ary, TSBTC 3-ary, TSBTC 4-ary, TSBTC 5-ary, TSBTC 6-ary, TSBTC 7-ary, TSBTC 8-ary, TSBTC 9-ary, and TSBTC 10-ary. The experimentation is done on UC Land Merced Dataset having 2100 images spread across 21 land usage types. Here the land usage identification accuracy, Matthews Correlation Coefficient (MCC), and F Measure have shown better performance in TSBTC 10-ary global feature extraction method. Further, the TSBTC 10-ary global features are concatenated with Sauvola thresholding-based local features for feature level fusion, which show the performance improvement of the proposed land usage identification technique. Also, the ensembles of machine learning algorithms are deployed for performance assessment along with the individual nine machine learning algorithms for the proposed land usage identification technique. The majority voting-based ensemble of ‘IB1+ Random Forest+ Simple Logistic+ SMO+ KStar’ has resulted in better accuracy of land usage identification.',
      '2020', 'Taylor and Francis', 0);
  describe('Pruebas de la clase artículo', () => {
    it('Se crea un objeto articulo distinto a null', () => {
      expect(articulo1).not.to.be.equal(null);
    });
    describe('Probar getters de la clase artículo', () => {
      it('articulo1.titulo returns La selección Española de futbol convoca a Pedri', () => {
        expect(articulo1.titulo).to.be.equal('La selección Española de futbol convoca a Pedri');
      });
      it('articulo1.autor returns [Eduardo Medina, Alberto Espinosa]', () => {
        expect(articulo1.autor).to.be.deep.equal(['Eduardo Medina', 'Alberto Espinosa']);
      });
      /* it('articulo1.ruedas returns 4', () => {
        expect(articulo1.ruedas).to.be.equal(4);
      });
      it('articulo1.aforo returns 5', () => {
        expect(articulo1.aforo).to.be.equal(5);
      }); */
    });
  });
});
