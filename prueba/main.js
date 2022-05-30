var saludos = function (persona) {
    return "Hola, " + persona;
};
var usuario = "Marcos";
console.log(usuario);
document.body.innerHTML = saludos(usuario);
//En TypeScript se muestran dos errores porque en este tipo de lenguaje se reconoce más facilmente los fallos antes de mostrarlos en el navegador web.
$("button.continue").html("Next Step...");
