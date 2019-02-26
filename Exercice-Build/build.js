const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
let appJsDistPath = path.resolve(distPath, 'app.js');

async function removeAndCreateDir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
  console.log('dist created');
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = Buffer.concat(buffers).toString();

  if (process.argv.includes('--minify')) {
    const result = UglifyJS.minify(content);
    content = result.code;
  }

  let checksum;

  // minimist, yargs, commander, inquirer
  if (process.argv.includes('--md5')) {
    checksum = md5(content);
    appJsDistPath = appJsDistPath.replace('app.js', `app.${checksum}.js`)
  }

  await fs.writeFile(appJsDistPath, content);
  console.log('js built');

  return checksum;
}

async function buildHtml(checksum) {
  const scriptTag = (checksum) ? `<script src="./app.${checksum}.js"></script>` : '<script src="./app.js"></script>';

  let content = await fs.readFile(indexHtmlPath, {encoding: 'UTF-8'});
  content = content.replace('<script src="./js/horloge.js"></script>', '')
                   .replace('<script src="./js/index.js"></script>', scriptTag);

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('html built');
}

(async () => {
  await removeAndCreateDir(distPath);

  // en serie
  const checksumMd5 = await buildJs();
  await buildHtml(checksumMd5);

  // en parallele
  // await Promise.all([
  //   buildJs(),
  //   buildHtml(),
  // ]);
})();
