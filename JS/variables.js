const last_name = "last_name";
const LastName= "LastName";
const lastName = "lastName";
document.write(lastName)

const person ="John Doe", carName="Volvo", price=200;

let x; //creando la variable
x=5; // Asignando valor, de tipo numerico entero y valor 5
x="Texto";//Asigna valor de tipo texto string

const variable1=1/0;

//NaN
const variable2=parseFloat('prueba');
// ejercicio 1 pag 164
let a=1, b=2, c=3
console.log(a+b+c)

c=13;
console.log(a+b+c)

const str2='hola';// 3 
console.log(str2.indexOf('a'));// 1 
console.log(str2.indexOf('ol'));// -1 
console.log(str2.indexOf('r'));

const str3='hola';
console.log(str3.substring(1,3));
console.log(str3.substring(1));

const str4='hola';
// h 
console.log(str4.charAt(0));
// a 
console.log(str4.charAt(3));
console.log(str4.charAt(4)); //undefined
console.log(str4[3]);
console.log(str4[4]); //undefined

//Ejercicio en clase: crear un array con los dias de la semana.
const daysoftheweek=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
console.log(daysoftheweek[2]) //miercoles
console.log(daysoftheweek[6]) //domingo
//no hace falta escribir array, solo defines la constante y ya.
console.log(daysoftheweek.length) //para saber la longitud del texto. (7 palabras)

//Arrays dimensiones
const array9=new Array("Carmen", "Juan");
array9[3]='Alejandro' //Para agregar otro valor
array9[1]='Carlos' //Para cambiar el nombre en la posición 1 por uno nuevo.
console.log(array9); //undefined
console.log(array9[2]);

//Ejercicio de acortar la variable ARRAY daysoftheweek hasta el jueves.
daysoftheweek.length=4;
console.log(daysoftheweek)

//Date
const date1=new Date();
//La fecha que se muestra es la del momento de creación de la constante date
console.log(date1);

const milisegundos=new Date().getTime();
console.log(milisegundos);

const date2 =new Date(milisegundos);
console.log(date2);

const día=new Date().getDay();
console.log(día) //da la posición del día, miercoles (3)

const year = new Date().getFullYear();
console.log(year)
