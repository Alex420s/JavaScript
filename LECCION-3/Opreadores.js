//en JS los operadores tienen una "jerarquia";
//*, /, %, +, -, de Izq. a Der.
let a = 2, b = 3, c =1;
let z = a * b + c;
 console.log(z);

 //usando parentesis pa modificar:
 z = a * (b + c);
 console.log(z);

 //operadores de asignacion ( = )
var t; // No tiene un valor asignado, por defecto es undefined. Solo declaramos
let x = 1; // Tiene un valor asinado, y al mismo tiepo la declaramos.
x += 2; // x = x + 2
console.log(x); // console.log() => Nos permite ver en pantalla de la "consola" el valor que ingresemos en el parentesis (no sé? ortografía xd pero he mejoado la redacción)

//Operadores comparecion
 let d = 3, f =2, g = "3";
let h = (d == f)

//== es para decir si a es igual a b y no revisa que tipo, solo contenido
console.log (h);
h = d == g;
console.log(h)
h = d === g; // revisa si son iguales y tambien el tipo
console.log (h);
h = d != g;
console.log(h);//revisa valor y no el tipo, si son diferentes
h = d !==g;
console.log(h);// revisa si son diferentes, revisa los tipos 

// mayor menor igual que
let u = 4, i = 2, o = "3"
let p = u < i;
console.log(p);
p = i <= o;
console.log(p);
p = o >= i;
console.log(p);

//Operador AND (&&), devuelve true solo si ambos operadores son true.
let m = 15;
let valMin =0;
let valMax=10;
if ( m >= valMin && m <= valMax ){
	console.log("Dentro de rango");
    }
    else { 
    	console.log("Fuera de rango");
  }


