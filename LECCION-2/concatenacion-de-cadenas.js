//esto es basicamente sumar strings ''-> espacio en blanco!!
var nombre = 'Alex';
var apellido = 'Hernandez';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
var nombreCompleto2 = 'Carl' + ' ' + 'wezer'
console.log(nombreCompleto2);
/*en JavaScript las expresiones se evalun de izquierda a derecha 
*/
var t = nombre +' '+'420';
console.log(t);
// al ser un string la primera expresion, en consecuencia los numeros se tomaran como strings.
var d = nombre + 4 + 2 + 0;
console.log(d);
//Para sumar los valores al nombre separamos as operaciones
var o = nombre + ' ' + (400 + 20);
console.log(o);
//al leer de izq a derecha efectua la suma primero
var p = 200 + 120 + 100 + ' ' + nombre
console.log(p);
