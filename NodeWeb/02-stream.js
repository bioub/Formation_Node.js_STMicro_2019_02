// Readable Stream
const fs = require('fs');
const zlib = require('zlib')
const readstream = fs.createReadStream('.editorconfig');

readstream.on('open', () => {
  const bytes = readstream.read(10);
});

// Writeable Stream
process.stdout.write('Hello\n');

// Pipe
readstream.pipe(process.stdout);

// Transform Stream (Duplex, à la fois Read/Write)
const gzip = zlib.createGzip();

// Affiche dans la console le zip de editorconfig
// cat .editorconfig | gzip > editorconfig.zip
readstream.pipe(gzip).pipe(process.stdout);

// Gulp, task runner sous forme de stream
// https://gulpjs.com/
