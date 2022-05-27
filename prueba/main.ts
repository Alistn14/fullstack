const saludos = (persona: string) => {
    return "Hola, " + persona;
}
const usuario: string = "Marcos";
console.log(usuario);
document.body.innerHTML = saludos(usuario);

//Se ha transcrito el archivo main.ts
//Transpilación de TypeScript a JavaScript; de main.js a main.ts para ver los errores que se ha producido en java 