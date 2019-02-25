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
const appJsDistPath = path.resolve(distPath, 'app.js');

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

  const result = UglifyJS.minify(content);
  content = result.code;

  const checksum = md5(content);
  await fs.writeFile(appJsDistPath.replace('app.js', `app.${checksum}.js`), content);
  console.log('js built');

  return checksum;
}

async function buildHtml(checksum) {
  let content = await fs.readFile(indexHtmlPath, {encoding: 'UTF-8'});
  content = content.replace('<script src="./js/horloge.js"></script>', '')
                   .replace(
                     '<script src="./js/index.js"></script>',
                     `<script src="./app.${checksum}.js"></script>`,
                    );

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
