const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;

chai.use(sinonChai);

const Contact = require('../../models/contact');
const contactCtrl = require('../../controllers/contact');

describe('Contact Controller', () => {

  describe('#list', () => {

    it('should call res.json when Contact.find resolves', async () => {
      const contacts = [{prenom: 'A'}, {prenom: 'B'}];

      const mock = sinon.mock(Contact);

      mock.expects('find').resolves(contacts).withExactArgs();

      const res = {
        json: sinon.spy(),
      };
      await contactCtrl.list({}, res);
      expect(res.json).to.have.been.calledOnceWithExactly(contacts);

      mock.verify();
    });

    it('should call next when Contact.find rejects', async () => {
      const err = new Error('Mongo Error');

      const mock = sinon.mock(Contact);
      mock.expects('find').rejects(err).withExactArgs();

      const next = sinon.spy();

      await contactCtrl.list({}, {}, next);

      expect(next).to.have.been.calledOnceWithExactly(err);
      mock.verify();
    });

    // Exercice

    // vérifier dans un test que next soit appelée si le find échoue
    // rejects(err) plutot que resolves(contacts)

    // Ajouter les tests de show et de create

  });

  describe('#show', () => {

    it('should call res.json when Contact.findById resolves', async () => {
      const contact = {prenom: 'A'};
      const req = {
        params: {
          id: '12',
        },
      };

      const mock = sinon.mock(Contact);
      mock.expects('findById').resolves(contact).withExactArgs(req.params.id);

      const res = {
        json: sinon.spy(),
      };
      await contactCtrl.show(req, res);
      expect(res.json).to.have.been.calledOnceWithExactly(contact);

      mock.verify();
    });

    it('should call next when Contact.findById rejects', async () => {
      const err = new Error('Mongo Error');
      const req = {
        params: {
          id: '12',
        },
      };

      const mock = sinon.mock(Contact);
      mock.expects('findById').rejects(err).withExactArgs(req.params.id);

      const next = sinon.spy();

      await contactCtrl.show(req, {}, next);

      expect(next).to.have.been.calledOnceWithExactly(err);
      mock.verify();
    });

    it('should call next when Contact.findById resolves falsy value', async () => {
      const req = {
        params: {
          id: '12',
        },
      };

      const mock = sinon.mock(Contact);
      mock.expects('findById').resolves(null).withExactArgs(req.params.id);

      const next = sinon.spy();

      await contactCtrl.show(req, {}, next);

      expect(next).to.have.been.calledOnceWithExactly();
      expect(req.notFoundReason).to.equals('Contact 12 not found');
      mock.verify();
    });




    // Exercice

    // vérifier dans un test que next soit appelée si le find échoue
    // rejects(err) plutot que resolves(contacts)

    // Ajouter les tests de show et de create

  });

  describe('#add', () => {

    it('should call res.json when Contact.create resolves', async () => {
      const contact = { id: 12, prenom: 'A '};
      const req = {
        body: { prenom: 'A '},
      };

      const mock = sinon.mock(Contact);
      mock.expects('create').resolves(contact).withExactArgs(req.body);

      const res = {
        json: sinon.spy(),
      };
      await contactCtrl.add(req, res);
      expect(res.statusCode).to.equals(201);
      expect(res.json).to.have.been.calledOnceWithExactly(contact);

      mock.verify();
    });

  });

  it('should call next when Contact.create rejects', async () => {
    const err = new Error('Mongo Error');
    const req = {
      body: { prenom: 'A '},
    };

    const mock = sinon.mock(Contact);
    mock.expects('create').rejects(err).withExactArgs(req.body);

    const next = sinon.spy();

    await contactCtrl.add(req, {}, next);

    expect(next).to.have.been.calledOnceWithExactly(err);
    mock.verify();
  });


});
