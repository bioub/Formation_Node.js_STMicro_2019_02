const assert = require('assert'); // fichier du binaire
const Contact = require('../contact'); // fichier du projet (./ ou ../ obligatoire)

try {
  const romain = new Contact('Romain');

  assert.strictEqual(romain.hello(), 'Hello my name is Romain', 'romain.hello()');
  console.log('Tests Contact SUCCESS');
} catch (err) {
  console.log('Tests Contact FAILED');
  console.log(err.message);
}
