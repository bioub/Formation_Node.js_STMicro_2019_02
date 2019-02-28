// const assert = require('assert'); // fichier du binaire
// const chalk = require('chalk'); // node_modules/chalk/index.js
// const Contact = require('../contact'); // fichier du projet (./ ou ../ obligatoire)

// try {
//   const romain = new Contact('Romain');

//   assert.strictEqual(romain.hello(), 'Hello my name is Romain', 'romain.hello()');
//   console.log(chalk.green('Tests Contact SUCCESS'));
// } catch (err) {
//   console.log(chalk.red('Tests Contact FAILED'));
//   console.log(chalk.red(err.message));
//   process.exit(1);
// }

const expect = require('chai').expect;
const Contact = require('../contact');

describe('#Contact', () => {
  let contact;

  // voir aussi beforeAll, afterAll, afterEach
  beforeEach(() => {
    contact = new Contact('Romain')
  });

  describe('#hello()', () => {
    it('should be able to change firstName', () => {
      contact.firstName = 'Eric';
      expect(contact.hello()).to.equal('Hello my name is Eric', 'contact.hello()');
    });

    it('should return default hello phrase', () => {
      expect(contact.hello()).to.equal('Hello my name is Romain', 'contact.hello()');
    });
  });

});
