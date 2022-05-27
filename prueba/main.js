var saludos = function (persona) {
    return "Hola, " + persona;
};
var usuario = "Marcos";
console.log(usuario);
document.body.innerHTML = saludos(usuario);

//El transpilado funciona como una transformación del TypeScript a JavaScript porque los navegadores web leen los archivos en este formato.