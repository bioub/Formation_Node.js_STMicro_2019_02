process.stdout.write('Hello\n');

// type de plate-forme (mac === darwin)
console.log(process.platform);

// heure (précision nanosecondes)
console.log(process.hrtime());

// kill le process (avec éventuellement un code d'erreur)
// process.exit(0); // pas d'erreur
// process.exit(1); // un type d'erreur

// Variables d'environnements (à mettre en cache)
// ex NODE_ENV (npm), si production pas d'install des devDependencies
console.log(process.env);

// Pour ne plus avoir à calculer les chemins absolus, on peut déplacer le CWD
process.chdir(__dirname);
console.log(process.cwd());

console.log(process.argv); // les arguments du programme (tout sauf ceux de node)
console.log(process.execArgv); // les arguments de node
