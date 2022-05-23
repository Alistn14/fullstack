//Ejercicio 1, dos string que compruebe si los dos primeros caracteres son iguales.
const string1= "Hola que tal";
const string2= "Hola que haces";
const laststring1=string1.length-1;//Guarda 23
const laststring2=string2.length-1;//Guarda 12

if (string1.charAt(1) == string2.charAt(1)) {
    document.write("Los dos strings tienen los dos primeros caracteres iguales");
} else {
    document.write("los dos primeros caracteres son diferentes");
}

//Ejercicio 2, dos string que compruebe si los dos primeros caracteres y los dos últimos son iguales.
if (string1.charAt(0) == string2.charAt(0) && (string1.charAt(laststring1)== string2.charAt(laststring2)))  {
    document.write("Los dos strings tienen la primera letra y la ultima igual")
} else {
document.write("Tienen la primera y ultima letra diferente")
}

//Ejercicio 3 pág.204 : Escribe un programa que compruebe que el substring "abc" existe en un string dado, pero no puede encontrarse ni al comienzo, ni al final.
let ejercicio3= "abc lorem abc a abc"
let existeABC = ejercicio3.indexOf("abc");
//Cumple que existe del 0 al 14 pero repasemos donde.
if ((ejercicio3.indexOf("abc")!=-1) && (ejercicio3.indexOf("abc") != 0) && (ejercicio3.lastIndexOf("abc")!= ejercicio3.length-3)) {
    console.log("Existe ABC dentro del string");
} else {
    console.log("No existe ABC dentro");
} 
//se podria hacer con slice del 1 al length-2.

//Ejercicio 4: escribe un programa que dado un string y una determinada posición, compruebe que el carácter anterior  y el posterior son iguales o no. REVISAR QUE NO ME SALE
let stringPos= "Alison Triguero Naranjo";
let pos= 3
if (stringPos.charAt(pos) == stringPos.charAt(pos+1)) 
{
   console.log("La letra anterior o posterior es igual");
}
 else  
 {
console.log("No son iguales las letras anterior o posterior");
 
}
//Ejercicio 7:escribe un programa que elimine el último carácter de un string.
let text= "Hola buenas";
text= text.slice(0,-1)
console.log(text);
//Desde 0 hasta menos uno (menos la ultima letra)
