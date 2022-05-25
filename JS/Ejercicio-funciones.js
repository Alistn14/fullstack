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