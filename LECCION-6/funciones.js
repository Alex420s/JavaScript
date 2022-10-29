// ¿Qué es una función?
// Una funcion es un bloque de código que podemos reutilizar (encapsula código)
// ¿Cúal es la diferencia entre parámetros y argumentos de una función?
// Las funciones reciben parámetros cuando las creamos, y mandamos argumentos cuando las ejecutamos.

testSuma(4,2) //Llamando a la función

//Declaración de la funcion
function testSuma(a, b){
    console.log("Suma: " + (a + b));
}

function test2Suma(a,b){
    return a+b;
}
let resultado = test2Suma(4,3);
console.log(resultado);

// Función de tipo Expresión.

let sumar = function (a,b){return a+b};

let result = sumar(7,4);
console.log(result);

// Función self-invoking (puede llamarse a si misma o ser anonima)
// No podemos volver a llamarla

(function (){
    console.log("Prueba de Función");
})();

/* Funciones Como objetos, tienen cualidades, aún no se de que hablan.*/

function numArgumentos (a,b,c){
    console.log(arguments.length); //Para usar debe estar dentro de la función
    return a+b-c;
};
 let test =numArgumentos(1,3,5);
 console.log(test);

 console.log(typeof numArgumentos);

/*Funciones de tipo Flecha (ESC6)

usamos const para que no cambie el valor asignado a la variable
Podemos omitir la palabra ""function""
Delante del simbolo de "=>" definimos el cuerpo de la función
No usamos return 
*/
// (a,b) son los parámetros
const sumaFuncionFlecha = (a,b) => a + b;
resultado = sumaFuncionFlecha(3,5);
//(3,5) son los Argumentos
console.log(resultado);

//Asignar valores por default
let resta = function(a=5, b=6){
    console.log(arguments[1]);
    return a-b;
}
resultado = resta();
console.log(resultado);

//Suma de todos los argumentos

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
resultado = sumarTodo(1,2,3,4,5,6,7,8,9);
console.log(resultado)