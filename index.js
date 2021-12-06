const colors = require('colors');


const { inquiererMenu, pausaMenu, leerInput } = require('./helpers/inquirer');
const { Pila } = require('./helpers/pila');
const { Cola } = require('./helpers/cola');



const main = async () =>{

    const pila  = new Pila
    const cola = new Cola

    do {
        opt = await inquiererMenu();
        
        switch (opt) {
            case '1':
                const desc = await leerInput('Valor a ingresar: ');
                cola.enqueue(desc);
            break;
            case '2':
                if(cola.size() === 0){
                    console.log('No hay ningún elemento en la pila');
                }else{
                    console.log(`El elemento eliminado es: ${colors.green(cola.dequeue())}`);
                }
            break;
            case '3':
                console.log(cola.print());
            break;
            case '4':
                console.log(cola.peek());
            break;
            case '5':
                console.log(cola.isEmpty());
            break;
            case '0':
                
            break;
        };
        

        await pausaMenu();

    } while (opt !== '0' );
}

main();


