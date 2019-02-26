const net = require('net');

const socket = net.createConnection(80, 'example.com');
socket.pipe(process.stdout); // affichera la réponse dans la console

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.end('\r\n');
});
