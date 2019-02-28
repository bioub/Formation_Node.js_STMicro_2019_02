const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiHttp);

const Contact = require('../models/contact');
const app = require('../app');

describe('Functional testing', () => {

  describe('GET /api/contacts', () => {

    it('should return contacts with status 200', async () => {
      // const res = await chai.request('https://www.google.com')
      //   .get('/');

      // expect(res).to.have.statusCode(200);
      // expect(res.text).to.have.string('Google');
      const contacts = [{prenom: 'A'}, {prenom: 'B'}];

      const mock = sinon.mock(Contact);
      mock.expects('find').resolves(contacts).withExactArgs();

      const res = await chai.request(app)
        .get('/api/contacts');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equals(contacts);
    });

  });

});
