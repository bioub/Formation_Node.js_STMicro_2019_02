// (function (exports, require, module, __filename, __dirname) {
// const assert = require('assert'); // fichier du binaire

// const chalk = require('chalk'); // node_modules/chalk/index.js

// const myMaths = require('../my-maths'); // fichier du projet (./ ou ../ obligatoire)

// try {
//   assert.strictEqual(myMaths.sum(1, 2), 3, 'myMaths.sum(1, 2) === 3');
//   assert.strictEqual(myMaths.multiply(2, 3), 6, 'myMaths.multiply(2, 3) === 6');
//   console.log(chalk.green('Tests myMaths SUCCESS'));
// } catch (err) {
//   console.log(chalk.red('Tests myMaths FAILED'));
//   console.log(err.message);
//   process.exit(1);
// }

// });
// const assert = require('assert');
// const assert = require('chai').assert;
const expect = require('chai').expect;
// const should = require('chai').should;
// should();
const myMaths = require('../my-maths');

describe('#myMaths', () => {
  describe('#sum()', () => {
    it('should add positive numbers', () => {
      // Style TDD
      // assert.strictEqual(myMaths.sum(1, 2), 3, 'myMaths.sum(1, 2) === 3');

      // Style BDD
      expect(myMaths.sum(1, 2)).to.equal(3, 'myMaths.sum(1, 2) === 3');
      // myMaths.sum(1, 2).should.be.equal(3, 'myMaths.sum(1, 2) === 3');
    });
  });

  describe('#multiply()', () => {
    it('should multiply positive numbers', () => {
      expect(myMaths.multiply(1, 1)).to.equal(1, 'myMaths.multiply(1, 1) === 1');
      expect(myMaths.multiply(2, 3)).to.equal(6, 'myMaths.multiply(2, 3) === 6');
    });
  });
});
