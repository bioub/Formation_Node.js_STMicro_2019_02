const express = require('express');

const app = express();

// Middleware (callback intermédiaire)

// Log Middleware
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

// n'importe quelle méthode HTTP
app.all('/', (req, res) => {
  res.send('Hello'); // appelle end
});

// Requete POST
// app.post('/inscription', express.urlencoded());
app.post('/inscription', express.json());
app.post('/inscription', (req, res) => {
  const name = req.body.name;
  res.send('Hello ' + name);
});

// get, post, put, delete (par méthode HTTP)
app.get('/redirect', (req, res) => {
  res.redirect('/'); // appelle end
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    name: name,
  });
});

app.get('/error/*', (req, res) => {
  res.send('Error');
});

app.get(/^\/api/, (req, res) => {
  res.send('API');
});

// ATTENTION AUX CONFLITS DE ROUTES
// une route précédente matche déjà la req
app.get('/api', (req, res) => {
  res.send('UNREACHABLE');
});

// 404
app.use('/api', (req, res) => {
  res.sendStatus = 404;
  res.json({error: 'CUSTOM 404'});
});

// 404
app.use((req, res) => {
  res.sendStatus = 404;
  res.send('CUSTOM 404');
});

app.listen(8080, () => {
  console.log('Server started');
});
