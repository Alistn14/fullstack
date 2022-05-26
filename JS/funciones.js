function sumar(a,b) {
     console.log(a+b);}
     
     //5
sumar(2,3);

//NaN(undefined+undefined) 
sumar();

//3
sumar(1,2);

//3 porque ignora el resto de parámetros, solo suma los dos primeros.
sumar(1,2,3,4);

//12 se juntan los dos numeros.
sumar('1',2);

//12
sumar(1,'2');

//Función anónima.
const sumar1 = function(a,b) {
    console.log(a+b); 
};
    //5
sumar1(2,3);

//Función método mediante creación de objeto
    const a={ 
        f:function() {
            console.log('Hola');
        }
    };
//invocaciónutilizandolanotaciónpunto 
a.f();
//invocaciónutilizandolanotaciónconcorchetes 
a['f']();

//Función autoejecutable, son ejecutadas una vez creadas, casi ni se puede apreciar.
(function saludar() { 
    console.log('Hola');
})();
// error 
//saludar();

//Función creadora de objetos, definimos primero la forma de ese objeto.
function hacerAlgo(a,b) { 
    this.a =a;
    this.b=b;
}
//creación del objeto
const objetoFuncion=new hacerAlgo(1,2);
//error porque b es un objeto 
//b();
// 1 
console.log(objetoFuncion.a);
// 2 
console.log(objetoFuncion.b);
// undefined 
console.log(this.a);

//función normal 
function calculo(altura) {
    return 5*altura/2;
};
console.log(calculo(2));

//función de flecha
const calculo1=(altura)=>{ 
    return 5*altura /2;
};
console.log(calculo1(5));

//forma simplificada de la función de flecha
const calculo2=altura=>5*altura/2;
console.log(calculo2(3));

//CALLBACKS

//Objetos this y arguments en una función pág.179

const hacerAlgo1 = (arg1, arg2) => {
console.log(this); //se refiere a todo el window
// las variables se convierten en globales

this.a = arg1;
this.b = arg2;
// a
console.log(a);
// b
console.log(b);
}
const resultado = hacerAlgo1('pepito', 'juanito');
// pepito
console.log(a);
// juanito
console.log(b);
// error
//console.log(c);
// error
//console.log(d);

//El this llamado por un objeto creado con new de una función.

function hacerAlgo2(argu1, argu2) {
    // hacerAlgo2 {}
    console.log(this);
    this.a = argu1;
    this.b = argu2;
    // Hola
    console.log(this.a);
    // undefined
    console.log(this.c);
    // error
//console.log(a);
    // error
//console.log(b);
}

let resultado2 = new hacerAlgo2('Hola', 'Buenos dias');
// Hola
console.log(resultado2.a);
// Buenos dias
console.log(resultado2.b);
// error
//console.log(a);
// error
//console.log(b);
// error
//console.log(c);
// error
//console.log(d);

//Objeto "arguments", establece posiciones de array:
function saludar() { 
//Aqui se define las posiciones de cada valor
const saludo = arguments [0]; 
const nombre= arguments[1];
const apellido = arguments[2];
//Fernández
console.log(arguments[2]);
//undefined
console.log(arguments[3]);
//Adiós, Carlos!
console.log(saludo +"," + nombre + apellido +"!");
}
saludar("Adiós", "Carlos", "Fernández");
//Aquí se definen los valores

//SCOPE

function saludar() {
     var edad = 14;
 }
 saludar();
// error
//console.log(edad);
 function saludar() {
 edad = 25; //Variable global tiene SCOPE global
}
function saludar2() {
   // 25
 console.log(edad);
// }
console.log(edad);
 saludar();
 
saludar2()
// 25
 console.log(edad);

// Declarar con var al principio la convierte en GLOBAL
var edad = 25; //identico que "edad = 25;"
function saludar() {
     // 25
console.log(edad);
}
saludar();

//Con var
function saludar1() {
    // var i;
    for (var i = 0; i < 10; i++) {
        console.log('Hola');
    }
    // 10, aunque se podría pensar que i en este punto no debería existir porque se creó en el ámbito del for
    console.log(i);
}
saludar1();
//Con let
function saludar2() {
    for (let i = 0; i < 10; i++) {
        console.log('Hola');
    }
    // error porque con let no hay Hoisting
    //console.log(i);
}
saludar2();

// error porque con let no hay Hoisting
//console.log(a);
let a = 4;
function varTest1() {
    let x = 31;
    if (true) {
        // error porque la variable x todavía no existe
        //console.log(x);
        let x = 71;
        // 71
        console.log(x);
    }
    // 31
    console.log(x);
}
varTest1();
function varTest2() {
    let x = 31;
    if (true) {
        // 31
        console.log(x);
    }
    // 31
    console.log(x);
}
varTest2(); }