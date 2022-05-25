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

//Función autoejecutable
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