//Ejercicio 1 del proyecto pág.197: Escribe un programa que declare 3 objetos de cada modelo de datos considerado; gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.

const objeto1= {

    gestor: "Banco X",
    Cliente:"Alison",
    mensaje() {
        console.log("Hola"+ " " + this.Cliente);
    },
    
    transferencia() {
        console.log("La transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}
console.log(objeto1.Cliente);
console.log(objeto1.mensaje());

const objeto2= {

    gestor: "Banco Y",
    Cliente:"Marc",
    mensaje() {
        console.log("Hola"+ this.Cliente);
    },
    
    transferencia() {
        console.log("La transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}

const objeto3= {

    gestor: "Banco Z",
    Cliente:"Ana",
    mensaje() {
        console.log("Hola"+ this.Cliente);
    },
    
    transferencia() {
        console.log("La transferencia de " + this.gestor + "se ha realizado correctamente");
    }
}
//Ejercicio 2: Almacena las propiedades del objeto en un array.(se hace con la función keys, si se requiere del valor de la propiedad se utiliza values.)

arrayObj1= Object.keys(objeto1)
console.log(arrayObj1);
arrayObj2=Object.keys(objeto2)
console.log(arrayObj2);
arrayObj3=Object.keys(objeto3)
console.log(arrayObj3);

//Para recorrer los arrays

lon1=arrayObj1.length;//4
for (let i = 0; i < lon1; i++) {
    console.log(objeto1[arrayObj1[i]]);
     
 }
lon2=arrayObj2.length;//4 propiedades
for (let i = 0; i < lon1; i++) {
    console.log(objeto2[arrayObj2[i]]);
     
 }
lon3=arrayObj3.length;//4
for (let i = 0; i < lon1; i++) {
    console.log(objeto3[arrayObj3[i]]);
     
 }
