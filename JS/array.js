//Ejercicio1: Escribe un programa que genere un array de 6 valores de tipo number y sean mostrados en pantalla utilizando un bucle for clásico y un bucle for...of.

const numero= [2,4,6,8,3,1];
const lon= numero.length; //6 valores

for (let i =0; i < lon; i++)  {
    console.log(numero[i]);
 }
 //for...of 
 for(let number of numero){
     console.log(number)
 }
 //Ejercicio 2: Escribe un programa que almacene los nombres de tres colores en un array y los muestre por pantalla mediante un bucle for...of.

 const colores=["amarillo, azul, rojo"]

 for(let colors of colores){
     console.log(colors)
 }
 //Ejercicio 3: Escribe un programa con un array que almacene los nombres de tres colores. A continuación,crea otro array vacío e inserta en él todos los elementos del primer array mediante un for...of y el método push.
 let colores3=[];
for (let colors of colores) {
colores.push(colors);
}
 //Ejercicio 4:Escribe un programa que dado dos arrays,devuelva el número de elementos que son iguales.

 let elementos1=["mar","rio","sol"];
 let elementos2=["oceano","rio","cielo"];
 let repeticiones=[]
 let contador=0
 for (let element1 of elementos1) {
   for (let element2 of elementos2) {
    if(element1==element2) {
        contador++; //contador=contador +1
        repeticiones.push(element1);
    }

  }
     
 }
 console.log ("El número de repeticiones es $ {contador}");
 console.log("Hay"+contador+"elementos iguales entre los dos array. Estos son: mar y río");

//Ejercicio 5: Escribe un programa que extraiga una porción del array a partir de una posición inferior y una superior y lo almacene en otro array.
let tierra= ["mar", "río", "sol", "oceano","nuves"];
let tierra2=tierra.slice(1,3);
console.log(tierra2);