const assert = require('assert'); // fichier du binaire
const chalk = require('chalk'); // node_modules/chalk/index.js
const Contact = require('../contact'); // fichier du projet (./ ou ../ obligatoire)

try {
  const romain = new Contact('Romain');

  assert.strictEqual(romain.hello(), 'Hello my name is Romain', 'romain.hello()');
  console.log(chalk.green('Tests Contact SUCCESS'));
} catch (err) {
  console.log(chalk.red('Tests Contact FAILED'));
  console.log(chalk.red(err.message));
}
