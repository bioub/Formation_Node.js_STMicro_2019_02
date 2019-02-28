const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;

chai.use(sinonChai);

const Contact = require('../../models/contact');
const contactCtrl = require('../../controllers/contact');

describe('Contact Controller', () => {

  describe('#list', () => {

    it('should call res.json', async () => {
      const contacts = [{prenom: 'A'}, {prenom: 'B'}];

      const mock = sinon.mock(Contact);

      mock.expects('find').resolves(contacts).withArgs();

      const res = {
        json: sinon.spy(),
      };
      await contactCtrl.list({}, res);
      expect(res.json).to.have.been.calledWith(contacts);

      mock.verify();
    });

    // Exercice

    // vérifier dans un test que next soit appelée si le find échoue
    // rejects(err) plutot que resolves(contacts)

    // Ajouter les tests de show et de create

  });

});
