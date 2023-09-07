class Humano {
    constructor(genero, edad){
        this._edad = edad;
        this._genero =genero;
        // Para aumentar el contador de objetos creados 
        // Accedemos a la clase 
        Humano.contadorObjetosCreados++;
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
    // Método static, accesible desde la clase y no de sus instancias u objetos.
    static saludo (){
        return 'chato'
    }

    static contadorObjetosCreados = 0;
}

let hombre = new Humano( 'Alex', 25);
// console.log(hombre.saludo())
console.log(Humano.saludo())

/* Atributos estaticos, podemos añadir un contador a la clase,
 cada que un objeto sea instanciado de nuestra clase padre añadira una unidad al contador.*/

console.log(Humano.contadorObjetosCreados)