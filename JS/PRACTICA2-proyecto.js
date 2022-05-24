//Ejercicio 1 del proyecto pág.197: Escribe un programa que declare 3 objetos de cada modelo de datos considerado; gestor, cliente, mensaje y transferencia. Los valores de las propiedades de los objetos pueden ser arbitrarios.


function Gestor(mensaje); {   
    this.mensaje=mensaje;
    
}
function Cliente(transferencia);{
    this.transferencia=transferencia;
}
const objeto1= new Gestor ("Ofrecemos nuestro servicio");
const objeto2= new Cliente(2000)


