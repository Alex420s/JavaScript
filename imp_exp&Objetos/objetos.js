// Un objeto tiene propiedades y métodos 

let persona = {
    nombre: 'Joan',
    apellido: 'sebastian',
    email: "tatuajes@besos.com",
    edad: "33"
}

let oracion = 'Hola, soy ' + persona.nombre +' '+ persona.apellido+'. Contrataciones a: '+persona.email+ ' , promociones por mi cumpleaños número: ' + persona.edad

console.log(oracion)

// Métodos 

let persona2 = {
    nombre: 'Joan',
    apellido: 'sebastian',
    email: "tatuajes@besos.com",
    edad: "33",
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido
    }
}
console.log(persona2.nombreCompleto) //Devuelve una función, debemos llarmarla para obtener el valor asociado
console.log(persona2.nombreCompleto()) //Podemos asignar los parametros para el meodo o funcion dentro del parentesis, de ser neesario

// Creación de objetos

let persona3 = new Object(); //Reserva nuevo espacio de memoria
persona3.nombre = 'Peter';
persona3.animal = 'araña';
persona3.estadoCivil = 'casado';

// Agregar o eliminar
persona3.telefono = '56189458';

console.log(persona3);

delete persona3.telefono;

console.log(persona3);

console.log(persona3['nombre']);

// Acceder a las propiedades de un objeto. 

for ( llave  in persona3){
    console.log( llave );
    console.log(persona3[llave]);

}

// Crea un Array 
let personArray = Object.values( persona3 );
let personArrayKeys = Object.keys ( persona3 )
console.log(personArrayKeys);
console.log( personArray );

// Crea una cadena JSON

let personaString = JSON.stringify(persona3);
console.log(personaString);

// Método GET 

let persona4 = {
    edad:25,
    nombre: "Alex",
    color: "verde",
    get nombreCompleto1(){
        return this.nombre +' '+ this.color;
    }
}
console.log(persona4.nombreCompleto1);

// Método set modifica los valores del objeto.

let persona5 = {
    edad:26,
    nombre: "Alex",
    color: "green",
    set newName( fix ){
        return this.nombre = fix.toUpperCase();
    },

    get nombreCompleto(){
        return this.nombre +' '+ this.color;
    }
    
}

persona5.newName = 'adams';

console.log(persona5.nombreCompleto);

/*  Método constructor
Se usa primera letra en mayuscula y el nombre del objeto a crear */

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email; 
    this.nombreCompleto = () =>{
        return this.nombre + ' ' + this.apellido
    }
}

let padre = new Persona('Alex', 'hanks', 'test@mail.com');

padre.nombre = 'Alexis';
console.log(padre);
console.log(padre.nombreCompleto())

// Podemos crear objetos de forma "formal" e "informal"

let object = new Object();
let objeto = {};

let mystring = new String('new order');
let micadena = 'hola chato';

let number = new Number (420);
let numero = 2;

let mifuncion = new Function();
let mifunction = function(){};

// Uso de prototype (asigna ua propiedad a los objetos que hereden del constructor)

Persona.prototype.tel = '56189458';

console.log(padre.tel);

// Uso de Call para poder usar un método del objeto1 en un objeto2

let person1 = {
    nombre: 'Juan',
    apellido: 'Canuto',
    nombreCompleto: function(titulo ='Lic.',tel='04455'){
        return titulo+ ': '+ this.nombre + ' ' + this.apellido + ', '+ tel;
    }
}

let person2 = {
    nombre: 'Anabel',
    apellido: 'Sarabi'
}

console.log(person1.nombreCompleto());
console.log(person1.nombreCompleto.call( person2, 'Ing','56189458' ));

// Método Apply, similar al metodo call

let person3 = {
    nombre:'Alan',
    edad: 25,
    nombreCompleto: ()=>{
        return this.nombre + ' ' + this.edad;
    }
}

console.log(person1.nombreCompleto.apply( person2 ));
// Para pasar parametros a con Apply necesitamos pasarlos en un array

let array = ['Youtuber','420']
console.log(person1.nombreCompleto.apply( person2,array));

