/*

        OPERADOR                    DESCRIPCION

            +                          SUMA
            -                          RESTA
            *                          MULTIPLICACION
            **                         EXPONENCIACION
            /                          DIVISION
            %                          MODULO (RESIDUO DIV.)
            ++                         INCREMENTO
            --                         DECREMENTO
*/
 let a = 4, b = 2, c= 10;
  z = a + b
 console.log("El resultado de la suma es: " + z);
  z = c - a;
 console.log("El resultado de la resta es: " + z);
  z = a * b;
 console.log("El resultado de la multiplicacion es: " + z);
  z = c ** b;
  console.log("El resultado de la exponenciacion es: " + z);
  z = c / b;
  console.log("El resultado de la division es: " +z);
  
/*En JS las expresiones se leen de izq. a der. , por lo tanto
dependiendo donde usemos el operador se hara el incremento o decremento
*/
let o = 0, p =1;
//pre-incremento; se usa el operador ++ antes de la variable, sumando una unidad inmediatamnete.
z = ++o;
console.log(z); 
console.log(o);
// Z toma el valor de 'o' (0), pero al tener pre-incremento, este valor toma !.

//post-incremento; se usa el operador ++ despues de la variable. sumando una unidad la sig. linea.
z = p++;
console.log(z);
console.log(p);
// Z toma el valor de 'p' (1), al tener post-incremento su valopr cambiara en +1 unidad la sig linea.

//pre-decremento
z = --p;
console.log(z);
console.log(p);
// p tenia el valor 2, al actuar un pre-decrecimiento tomo el valor de 1.

//post-decremento
z = o--;
console.log(z);
console.log(o);
//z toma el valor de o antes del decremnto.
// o regresa el valor despues del decremento.
