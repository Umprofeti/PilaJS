
require('colors');


const mostrarMenu = ()=>{

    return new Promise(resolve =>{

        console.clear();
        console.log('--------------------------------------'.rainbow);
        console.log('          BIENVENIDO        '.green);
        console.log('  Porfavor seleccione una opcion  '.green);
        console.log('--------------------------------------\n'.rainbow);
    
        console.log('0. Salir'.blue);
        console.log('1. Agregar un elemento a la pila'.blue);
        console.log('2. Eliminar un elemento de pila'.blue);
        console.log('3. Actualizar un elemento de pila'.blue);
        console.log('4. Ver todos los elementos de la pila'.blue);
        console.log('5. Ver un elemento de la pila \n'.blue);
    
        const readline = require('readline').createInterface({
    
            input: process.stdin,
            output: process.stdout
        });
    
    
    
        readline.question('Selecione una opción: ', ((opt) => {
            readline.close();
            resolve(opt);
        }))

    });   

   

}

const pausarMenu = ()=> {

    return new Promise(resolve =>{

        const readline = require('readline').createInterface({
    
            input: process.stdin,
            output: process.stdout
        });
    
    
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, ((opt) => {
            readline.close();
            resolve();
        }));
    })



}


module.exports= {
    mostrarMenu,
    pausarMenu
}