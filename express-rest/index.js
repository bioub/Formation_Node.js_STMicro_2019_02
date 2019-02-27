const http = require('http');
const mongoose = require('mongoose');

const app  = require('./app');
const config = require('./config');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
