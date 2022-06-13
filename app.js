const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('./config/colors');

console.clear();

crearTabla( argv.b, argv.l, argv.t  ).then ( nombreFichero => console.log( color.blue(nombreFichero), 'creado'))
                             .catch( err => console.log(err));
