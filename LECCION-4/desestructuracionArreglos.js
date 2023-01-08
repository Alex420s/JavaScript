// Desestructuracion de Arrays (arreglos)

const DBZ = [ 'Goku', 'Vegeta', 'Freezer'];

console.log( DBZ[0] );
console.log( DBZ[1] );
console.log( DBZ[2] );
// Inicia por el 1° elemento (0)
const [ p1 ] = DBZ;
// Acceder al segundo elemento
 const [, p2] = DBZ;
// Acceder al 3° elemento
const [,,p3] = DBZ;

console.log( p3 );
console.log( p2);
console.log( p1 );

// Ejemplo

const newArreglo = () => {
    return [ 'ABC', 123 ] 
}

const sakaa = newArreglo();
console.log(sakaa); 

const [ letras, numeros ] = newArreglo();
console.log(letras, numeros)