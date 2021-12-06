const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name:  'Opcion',
        message: '¿Que desea hacer?',
        choices:[
            {
                value: '0',
                name:'0. Salir'
            },
            {
                value: '1',
                name:'1. Agregar un elemento a la cola'
            },
            {
                value: '2',
                name:'2. Eliminar un elemento de la cola'
            },
            {
                value: '3',
                name:'3. Ver todos los elementos de la cola'
            },
            {
                value: '4',
                name:'4. Ver el proxímo elemento a salir en la cola'
            },
            {
                value: '5',
                name:'5. Ver si la cola está vacía.'
            }
            
        ]
    }
]

const Pause = [
    {
        type: 'input',
        name: 'TocarTecla',
        message:`\nPresione ${'ENTER'.green} para continuar\n`
    }
]
const inquiererMenu = async ()=>{

        console.clear();
        console.log('--------------------------------------'.rainbow);
        console.log('        Estructura de Cola        '.green);
        console.log('  Porfavor seleccione una opción  '.green);
        console.log('--------------------------------------\n'.rainbow);

    const {Opcion} = await inquirer.prompt(menuOpts);
    return Opcion;

}
const pausaMenu = async () =>{
    console.log('\n');
    await inquirer.prompt(Pause);

}

const leerInput = async (message) => {
    const pregunta = [
        {
            type: 'input',
            name:'desc',
            message,
            validate(value){
                if(value.length == 0){
                    return 'Por favor ingresa un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(pregunta);
    return desc ; 
}


module.exports = {
    inquiererMenu,
    pausaMenu,
    leerInput
}