class Pila {
    constructor() {
        this.objetos = {};
        this.top = 0
    };

    push(datos){
        this.top ++;
        this.objetos[this.top] = datos
    };
    pop(){
        let borrandoDatos;

        if(this.top){
            borrandoDatos = this.objetos[this.top];
            delete this.objetos[this.top];
            this.top--;
            return borrandoDatos;
        };
    };
    getSize(){
        return this.top;
    };
    imprimirDatos(){
        let resultado = ''

        for(let i = this.top; i > 0; i--){
            resultado += this.objetos[i]+ '\n';
        };
        return resultado; 
    };
    peek(){

        if(this.getSize() === 0){
            return 'No hay elementos proximos a salir';
        };

        return this.objetos[this.top];
    };
    estaVacia(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }

    }
}

module.exports = {Pila}