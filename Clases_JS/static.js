class Humano {
    constructor(genero, edad){
        this._edad = edad;
        this._genero =genero;
    }
    get edad (){
        return this._edad;
    }

    set edad ( edad ){
        this._edad = edad;
    }

    get genero (){
        return this._genero;
    }

    set genero ( genero ){
        this._genero = genero;
    }
    static saludo (){
        return 'chato'
    }
}

let hombre = new Humano( 'Alex', 25);
// console.log(hombre.saludo())
console.log(Humano.saludo())