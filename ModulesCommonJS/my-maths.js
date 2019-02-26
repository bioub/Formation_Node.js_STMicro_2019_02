// (function (exports, require, module, __filename, __dirname) {
'use strict';

/**
 * Additionne 2 paramètres
 * @param {number} a Le premier paramètre
 * @param {number} b Le second paramètre
 * @returns {number} La somme
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

/**
 * Multiplie 2 paramètres
 * @param {number} a Le premier paramètre
 * @param {number} b Le second paramètre
 * @returns {number} Le produit
 */
function multiply(a, b) {
  return a * b;
}


// Création d'une function globale sum
// global.sum = sum;

// Export d'une function sum
exports.sum = sum;
exports.multiply = multiply;

// });
