const fs = require('fs');
const config = require('./config/config');

fs.readdirSync('./test')
  .filter((filename) => filename.endsWith(config.testExtension))
  .forEach((filename) => require(`./test/${filename}`));
