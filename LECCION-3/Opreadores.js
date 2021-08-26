//en JS los operadores tienen una "jerarquia";
//*, /, %, +, -, de Izq. a Der.
let a = 2, b = 3, c =1;
let z = a * b + c;
 console.log(z);
 //usando parentesis pa modificar:
 z = a * (b + c);
 console.log(z);
 //operadores de asignacion
let x = 1;
x += 2; // x = x + 2
console.log(x);
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


