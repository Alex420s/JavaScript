// Funciones en JS
const saludo = function( nombre ){
    return `Hola, ${ nombre }`
}
console.log( saludo('Beni') )

// Función de tipo flecha
const saludo2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}
console.log( saludo2('Adolfo') )

const saludo3 = ( nombre ) => `Hola, ${ nombre }`;

console.log(saludo3('Hirohito'));

const saludo4 = () => `Hola mundo`
console.log( saludo4() )


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions 
// Default parameters adding = after the name of the parameter, followed by the default value:

function hello( name='Alex420s' ) {
    console.log( `Hello ${name}!`);
}

hello("Alexa");
hello();

// an anonymous function, because it has no name.

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener('keydown', logKey);

// If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:

textBox.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}".`);
  });

//   If the function only has one line in the curly brackets, you omit the curly brackets:

textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

// If the function only takes one parameter, you can also omit the brackets around the parameter:

textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
