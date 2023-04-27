/*  Clases en JavaScript
 todo es similar a python asi que no le veo problema.
*/

class Persona { // No hay necesidad de poner comas, cada "bloque de código" es una propiedad o metodo de clase

    constructor(nombre, apellido){{
        this._nombre = nombre;
        this._apellido = apellido;
    }} // Método constructor similar a  def init(): pero no hacemos referencia al objeto, solo pasamos los parametros.

    get nombre (){
        return this._nombre;
    }

    set nombre ( nombre ){
        this._nombre = nombre;
    }

    get apellido (){
        return this._apellido;
    }

    set apellido ( apellido ){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre +' '+ this._apellido
    }
    toString(){
        return this.nombreCompleto();
    }
   
    static saludar(){
        console.log('saludos chato')
    }
}


// Herencia en JavaScript, vamos a extender una clase.

class Empleado extends Persona{
    // Al heredar tenemos que pasar los paraetros necesarios a la clase padre, 
    // Usamos el método super para hacer referencia al constructor "padre"

    constructor(nombre, apellido, departamento){ // *Primero "llenamos" los paraetros de la clase padre
        super(nombre, apellido); // Constructor clase padre
        this._departamento = departamento;
    }
    get departamento (){
        return this._departamento
    }
    set departamento ( departamento ){
        this._departamento = departamento;
    }
    /* No necesitamos la palabra function al defini métodos
     Sobreescritura en JavaScript 
     Desde la clase hija modificamos a la clase padre 
     Debe ser el mismo método o declarariamos uno nuevo.
    */
    // nombreCompleto(){
    //     return this._nombre +' '+ this._apellido + ', ' + this._departamento
    // }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento
    }
    
}
// Herredamos propiedades y Métodos de la clase padre

let empleado = new Empleado('Alex','Garita', 'Backend');

console.log(empleado);
empleado.apellido = 'Hernández';
console.log(empleado.apellido);
console.log(empleado.nombreCompleto());

// La clase Object() es "el padre" de todas las clases y tiene distintos métodos:
// Devuelve los valores actuales de los atributos del objeto.
// Prototype permite añadir propiedades ométodos de forma dinamica.
let persona1 = new Persona('Alexis', 'Fernandez');
// Método toString() devuelve informacion sobre el objeto.
// Lo sobreescribiremos paa usarlo.
// Es el polimorfismo, acceder a un método de la clase padre o la clase  
console.log(empleado.toString());
console.log(persona1.toString());

// Método static, solo se puede llamar desde la Clase y no desde la instancia u objeto.
// console.log(empleado.saludar());
// console.log(Persona.saludar());
Persona.saludar();
