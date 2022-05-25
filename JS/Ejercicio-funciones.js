//Ejercicio 1: Escribe un programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir.(cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocara las cuatro funciones con valores arbitrarios.
const sumar = (x,y) => {
    return x+y;
};
console.log(sumar(2,2));

const restar= (x,y) => {
    return x-y;
};
console.log(restar(8,4));

const multiplicar = (x,y) => {
    return x*y;
};
console.log(multiplicar(3,7));

const dividir=(x,y)=> {
    return x/y;
};
console.log(dividir(6,3));

//Ejercicio 2:Adaptar el programa del ejercicio anterior simplificando las funciones de flecha eliminando las llaves y el return.
const sumar1 = (x,y)=> x+y
console.log(sumar1(1,2));

const restar1 = (x,y)=> x-y
console.log(restar1(8,4));

const multiplicar1 = (x,y) => x*y
console.log(multiplicar1(3,7));

const dividir1 = (x,y) => x/y
console.log(dividir1(6,3));

//Ejercicio 3: adaptar las cuatro funciones del Ejercicio 2 para que reciban un callback que sea invocado dentro de la función con el resultado de la operación. Posteriormente invocar a las cuatro funciones creando una función de callback por separado y pasándola después por parámetro. Utilizar la herramienta de depuración de Chrome (Herramientas de desarrollador --> Source) para comprobar cómo se ejecuta el programa.

// const callback = (resultado) => {
//     console.log(resultado);
// }

const sumar2 = (x,y,callback)=> callback(x+y);
sumar2(1,2, callback);

const restar2 = (x,y, callback)=> callback (x-y);
restar2(8,4, callback);

const multiplicar2 = (x,y,callback) => callback (x*y);
multiplicar2(3,7, callback);

const dividir2 = (x,y,callback) => callback (x/y);
dividir2(6,3, callback);

//Ejercicio 4: adaptar el ejercicio anterior para integrar el callback en la invocación de las cuatro funciones, en lugar de creándola como una función de callback por separado.

const callback = (resultado1) => {
    console.log(resultado1);
};
sumar2(1,2, (resultado1) => {
    console.log(resultado1);
}