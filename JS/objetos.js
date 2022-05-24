const persona = { nombre:'Alejandro',
'lugar de residencia':'Madrid'};
// Alejandro 
console.log(persona.nombre);
// Alejandro 
console.log(persona['nombre']);
//error
console.log(persona.lugarderesidencia);
//enestecasosonobligatoriosloscorchetes 
persona['lugar de residencia']='Sevilla';
//Sevilla
console.log(persona['lugarderesidencia']);