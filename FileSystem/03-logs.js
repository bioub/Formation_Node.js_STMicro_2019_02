const fs = require('fs');
const path = require('path');

function log(filePath, msg) {
  // [2019-02-25 14:17:03] Ligne 1\n
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.promises.appendFile(filePath, line);
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

/*

fs.promises.stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err));

*/
async function checkOrCreateDir(dirPath) {
  try {
    const stats = await fs.promises.stat(dirPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.promises.mkdir(logDir);
    }
    throw err;
  }
}

(async () => {
  try {
    await checkOrCreateDir(logDir);
    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    console.log('DONE');

  } catch (err) {
    console.log(err)
  }
})();
