//Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios
const sumar =(x,y) =>{
    return x+y;
}; 
const restar =(x,y) =>{
 return x-y;
 };
const multiplicar =(x,y) =>{
     return x*y;
 };
const dividir =(x,y) =>{
    return x/y;
};
console.log(sumar(1,2));
console.log(restar(1,2));
console.log(multiplicar(1,2));
console.log(dividir(1,2));

//Ejercicio 2: adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.

const sumar1 =(x,y) => x+y; 
const restar1 =(x,y) => x-y;
const multiplicar1 =(x,y) =>x*y;
const dividir1 =(x,y) => x/y;

console.log(sumar1(4,2));
console.log(restar1(3,1));
console.log(multiplicar1(7,5));
console.log(dividir1(12,6));

//Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.

const sumar2 =(x,y,callback) => callback(x+y); 
const restar2 =(x,y,callback) => callback(x-y);
const multiplicar2 =(x,y,callback) =>callback(x*y);
const dividir2 =(x,y,callback) => callback(x/y);

//Ejercicio 4
// const callback = (resultado) => {
//     console.log(resultado);
// }

sumar2(4,2,(resultado) => {
console.log(resultado);
});
restar2(3,1,(resultado) => {
console.log(resultado);
});
multiplicar2(5,7,(resultado) => {
console.log(resultado);
});           
dividir2(6,8,(resultado) => {
console.log(resultado);
});

//Ejercicio 5: adaptar las cinco funciones del Ejercicio 4 para que las cuatro funciones invoquen el callback una vez han transcurrido 1 segundo (para la función sumar), 2 segundos (para la función restar), 3 segundos (para la función multiplicar) y 4 segundos para dividir (para la función dividir). Añadir un console.log en la última línea del código del programa. 

setTimeout (() => {
   console.log(sumar2(4,2,(resultado) => {
        console.log(resultado);
    }));
},1000)

setTimeout (() => {
    console.log(restar2(3,1,(resultado) => {
        console.log(resultado);
    }));
},2000)

setTimeout (() => {
    console.log(multiplicar2(5,7,(resultado) => {
        console.log(resultado);
    }));
},3000)

setTimeout (() => {
    console.log(dividir2(6,8,(resultado) => {
        console.log(resultado);
    }));
},4000)

