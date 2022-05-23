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