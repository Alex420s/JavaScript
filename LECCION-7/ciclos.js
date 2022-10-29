/*
-¿Qué es un ciclo?

Ejecutar un bloque de código hasta que se cumpla cierta condición.

-¿Qué tipo de ciclos existen en JS?

While, do while y for.

-¿Qué es un ciclo infinito?

Es cuando la condición nunca se cumple */

//ciclo while
//si la condición se cumple ejecuta el código, puede que no se ejecute.


let contador = 0;

while (contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

/*Ciclo do-while
Ejecuta el código, despúes revisa una condicion y decide si termina o repite.
siempre se ejecuta, por lo menos una vez.
*/

let conta = 0;

do{
    console.log(conta);
    conta++;
}while(conta < 3);
console.log("Fin ciclo do while");

/*Ciclo For
-Revisa una condición y ejecuta un bloque de código, depúes modifica la condición y termina si la condicion no se cumple.
*/

for (let i = 0; i < 5; i++){
    console.log("Fin ciclo for");
}