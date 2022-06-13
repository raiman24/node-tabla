const fs = require ('fs');


// con la clase Promise
/*
const crearTabla = ( base = 3 ) => {

    return new Promise( ( resolve, reject ) => {
        const nombreFichero = `tabla-${base}.txt`;
        let salida = '';


        for (let index = 1; index <= 10 ; index++) {
            salida += `${base} x ${index} = ${ base * index}\n`;
            
        }
        
        try {
            fs.writeFileSync(nombreFichero, salida)
            resolve( nombreFichero );
            
        } catch (error) {
            reject( error );
        }

    });
    
}
*/
// con async

const crearTabla = async( base = 3, listar, to = 10 ) => {


        const nombreFichero = `./salida/tabla-${base}.txt`;
        let salida = '';


        for (let index = 1; index <= to ; index++) {
            salida += `${base} x ${index} = ${ base * index}\n`;
            
        }

        if ( listar ) {
            console.log(salida);
        }

        
        try {
            fs.writeFileSync(nombreFichero, salida)
            return nombreFichero;
            
        } catch (error) {
            throw error;
        }

    
}



module.exports = {
    crearTabla: crearTabla
}