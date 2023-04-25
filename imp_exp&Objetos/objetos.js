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