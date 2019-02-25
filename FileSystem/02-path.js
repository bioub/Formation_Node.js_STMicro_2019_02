const path = require('path');

console.log(path.isAbsolute('/Users')); // true
console.log(path.isAbsolute('.editorconfig')); // false

console.log(path.extname('image.jpg')); // .jpg

console.log(path.resolve('.editorconfig')); // chemin absolu .editorconfig (en partant du CWD)
console.log(path.resolve(__dirname, '.editorconfig')); // chemin absolu .editorconfig
console.log(path.resolve('/Users', 'romain', 'Desktop'));
console.log(path.resolve('/Users', 'romain', 'Desktop', '..', 'Documents'));

console.log(path.join('.editorconfig')); // chemin relatif .editorconfig (en partant du CWD)
console.log(path.join(__dirname, '.editorconfig')); // chemin absolue .editorconfig
console.log(path.join('/Users', 'romain', 'Desktop', '..', 'Documents'));
