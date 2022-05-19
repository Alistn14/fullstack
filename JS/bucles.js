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
//para quitarle la coma del final ponemos un condicional

}