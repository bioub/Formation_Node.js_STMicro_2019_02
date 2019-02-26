// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert'); // fichier du binaire

const chalk = require('chalk'); // node_modules/chalk/index.js

const myMaths = require('../my-maths'); // fichier du projet (./ ou ../ obligatoire)

try {
  assert.strictEqual(myMaths.sum(1, 2), 3, 'myMaths.sum(1, 2) === 3');
  assert.strictEqual(myMaths.multiply(2, 3), 6, 'myMaths.multiply(2, 3) === 6');
  console.log(chalk.green('Tests myMaths SUCCESS'));
} catch (err) {
  console.log(chalk.red('Tests myMaths FAILED'));
  console.log(err.message);
  process.exit(1);
}

// });
