const argv = require('yargs')
                    .options({
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Base de la tabla de multiplicar'
                        },
                        'l': {
                            alias: 'list',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla de multiplicar'
                        },
                        't': {
                            alias: 'to',
                            type: 'number',
                            describe: 'Hasta qué número quieres multiplicar'
                        }
                        
                    })
                    .check( (argv, options) => {
                        if ( isNaN( argv.b )){
                            throw new Error('La base tiene que ser un número.')
                        }

                        return true;
                    })
                    
                    .argv;


module.exports = argv;