const readline = require('readline');
const random = require('./random');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    this.entierAlea = random.getRandomInt(min, max);
    this.essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!!`);
    }

    this._rl.question('Quel est le nombre ?', (saisie) => {
      const entierSaisi = Number.parseInt(saisie);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      // modifier le tableau de manière muable
      this.essais.push(entierSaisi);

      // modifier le tableau de manière immuable
      // this.essais = [...this.essais, entierSaisi];

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné !');
      this._rl.close();
    });
  }
}

module.exports = Jeu;
