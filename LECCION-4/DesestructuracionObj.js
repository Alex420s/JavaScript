// Desestructuración 
// Asignación Desestrurante

// Creamos un objeto 
const persona = {
    nombre:"Marco",
    edad: 45,
    escolaridad:"licenciatura",
};
// Añadimos el nombre de la propiedad a la cual queremos acceder, si deseamos lo podemos cambiar.
 const { nombre:apodo, edad, escolaridad:nivelEducativo } = persona;

 console.log( apodo );
 console.log( persona.nombre );
 console.log( edad );
 console.log( nivelEducativo );
 console.log( persona.escolaridad);

//  Definimos que propiedad deseamos mostrar, esto omite las propiedades no seleccionadas

const retornarPersona = ({ nombre }) => {
    console.log( nombre );
}
retornarPersona( persona );

// Podemos añadir una propedad extra directamente sin modificar el objeto.

const retornarPersona2 = ({ nombre,edad  , nivel="aprendiz" }) => {
    console.log( nombre + ',', nivel,'de '+ edad + ' años' );
}
retornarPersona2( persona );