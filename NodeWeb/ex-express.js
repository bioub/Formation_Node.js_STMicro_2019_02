const express = require('express');

const todos = [
  {
    title: "Introduire Express",
    completed: true,
    id: 1
  },
  {
    title: "Aller prendre le train",
    completed: false,
    id: 2
  }
];

const app = express();

// Créer 4 routes (à tester avec Postman et/ou l'application TodoWeb https://github.com/bioub/Formation_JavaScript_STMicro_2019_01)

// GET /todos
// Retourne en JSON le tableaux todos
// Status Code 200

// DELETE /todos/2  (2 étant un paramètre)
// Supprime l'élément dont l'id est dans l'URL (voir find, findIndex et splice sur MDN Array)
// Retourne en JSON l'élément qui vient d'être supprimé
// Status Code 200

// POST /todos
// Recoit en JSON un contact, l'ajoute au tableau en lui attribuant un nouvel id
// Retourne en JSON l'élément qui vient d'être créé avec son nouvel id
// Status Code 201
// (Penser à express.json())

// 404
// Retourne pour toutes les autres URL une erreur 404
// En JSON : { error: 'Not Found' }
// Status Code 404

app.listen(3000, () => {
  console.log('Server started : http://localhost:3000');
});
