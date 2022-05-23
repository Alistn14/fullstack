for (let i=0;i<5;i++) {
    console.log(i);
} //aparecerán los números del 1 al 4.
 
const array=['En','un','lugar','de','la','mancha']; 
const len = array.length; 
//valor 6, se pone espacio entre comillas para espaciar entre cada palabra.
for(let i =0; i<len; i++) {
    console.log(array[i]);
document.write(array[i]+" ");
}

//FOR del ejercicio 8
for (let i = 1; i <= 50; i++) {
  console.log(i)   
}
//Ejercicio 9 tabla de multiplicar del 5
for (let i = 0; i<11; i++) {
    //Tabla 5x1 al 5x10
    document.write("<br>"+ "5x"+ i +"="+ 5*i +"<br>"); //concatenación
   
}
//Ejercicio 10
let palabra= prompt("Escriba una palabra");
for (let i =0 ; i<10; i++) {
document.write(palabra + "<br>")

}
//Ejercicio 11
let numero= prompt("escriba un número entero positivo");

for (let i = numero ; i >=0 ; i--) {
    if(i==0) {
        document.write(i);
    } else{
        document.write(i+", ")
    }
}
//para quitarle la coma del final ponemos un condicional.

//Ejercicio bucle WHILE Y DO-WHILE: Muestra enumeración del 1-10.

let contador1=1;
while (contador1<=10) {
    contador1++;
}
console.log(contador1);
//Este while solo muestra 1 solo valor, el 11.

let contador2=1;
while (contador2<=10) {
    console.log(contador2);
    contador2++;
}
//Aqui lo muestra 11 veces porque entra en el bucle

//Este DO-WHILE muestra valores del 1 al 10.
let contador3=1;
do {
    console.log(contador3);
    contador3++;
} while (contador3<=10);
//las acciones se hacen mientras la condición se cumple.

//TRY-CATCH
try { adddlert('a');
let variable=0
console.log(variable);
throw 'La función probada no es correcta o no existe';
}
catch(err) {
    alert(err)
}
