/*
Ejemplos de tipos de datos
en JavaScript.
*/

    // Tipo de dato string 
var nombre = "Alex";
console.log(nombre);
console.log(typeof nombre)
    //Tipo de dato numerico
var numero = 1000;
console.log(numero);   
console.log(typeof numero)
    //tipo de dato objeto
    var objeto = {
        nombre : "Alex",
        apellido: "Hernandez",
        edad :  "23",

    }
    console.log(objeto);
/* EN JavaScript las variables son dinamicas y cambian de acuerdo al tipo de dato que almacenes.
Con la funcion "typeof" sabras que tipo de variable almacena
*/
nombre = 10;
console.log(typeof nombre);

/*Tipo de dato boolean (true, false)
tambien llamado bandera (rojo o verde)
*/
var bandera = true;
console.log(bandera);

//Tipo de dato function.
//()=informacion que recibe la funcion   -- {} especificar lineas de codigo de la funcion
function mifuncion(){};
console.log(mifuncion);
//Tipo de dato symbol.
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
//Tipo de dato clase e una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
//Tipo de dato undefined.
//undefined es un valor que se le puede dar a una variable y tambien un tipo de dato.
var x;
console.log(x);

x = undefined;
console.log(x);
//null = ausencia de valor, es un tipo de dato object.
var y = null;
console.log(y);
console.log(typeof y);
//ARRAYS : ES UN ARREGLO. para definirlo abrimos corchetes [] array es un tipo object.
var taxi = ['bocho', 'tsuru', 'chevi'];
console.log(taxi);
console.log(typeof taxi);
//Tipo de dato vacio
var z ='';
console.log(z);
console.log(typeof z);
