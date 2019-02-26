const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello');
  }
  else if (req.method === 'GET' && req.url === '/redirect') {
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.write('Not Found');
  }
  res.end(); // OBLIGATOIRE pour que la réponse soit envoyée
});

/*
Idem à http.createServer(() => {});
server.on('request', () => {});
*/

server.listen(8080, () => {
  console.log('Server started');
});
