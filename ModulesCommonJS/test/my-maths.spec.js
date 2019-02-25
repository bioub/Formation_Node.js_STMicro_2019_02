// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert'); // fichier du binaire
const myMaths = require('../my-maths'); // fichier du projet (./ ou ../ obligatoire)

try {
  assert.strictEqual(myMaths.sum(1, 2), 3, 'myMaths.sum(1, 2) === 3');
  assert.strictEqual(myMaths.multiply(2, 3), 6, 'myMaths.multiply(2, 3) === 6');
  console.log('Tests my-maths SUCCESS');
} catch (err) {
  console.log('Tests my-maths FAILED');
  console.log(err.message);
}

// });
