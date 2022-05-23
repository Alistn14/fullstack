//Ejercicio1: Escribe un programa que genere un array de 6 valores de tipo number y sean mostrados en pantalla utilizando un bucle for clásico y un bucle for...of
const numero= [2,4,6,8,3,1]
const lon= numero.length; //6 valores
let number
for (let i =0; i < lon; i++)  {
    console.log(numero[i])
 }
 //for...of no entiendo muy bien.
 for(let number of numero){
     console.log(numero)
 }
 //Ejercicio 2: Escribe un programa que almacene los nombres de tres colores en un array y los muestre por pantalla mediante un bucle for...of.
 const colores=["amarillo, azul, rojo"]
 let colors 
 for(let colors of colores){
     console.log(colores)
 }
 