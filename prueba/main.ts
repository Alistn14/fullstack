const saludos = (persona: string) => {
    return "Hola, " + persona;
};
const usuario: string = "Marcos";
console.log(usuario);
document.body.innerHTML = saludos(usuario);

//En TypeScript se muestran dos errores porque en este tipo de lenguaje se reconoce más facilmente los fallos antes de mostrarlos en el navegador web.
