//Sincronia

const consultarDatabase = () => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000);
    return "Consulta realizada"; //no se hara hasta que hayan pasado 3 segundos, cuando pasan los 3s sale del while y ejecuta el return (delay=retraso) de ahí se ejecuta lo demás. 3s pasa para todo el programa. 
//Se ejecuta todo por separado... En el orden que se encuentra en el propio codigo. (orden de secuencia )
}
//el resto se ira ejecutando sin mas
console.log("Primera consulta al servidor");
const consulta1 = consultarDatabase();
console.log(consulta1);
console.log("Segunda consulta al servidor");
const consulta2 = consultarDatabase();
console.log(consulta2);
console.log("Más tareas a realizar...");

//Asincronia sale segun los milisegundos que se ejecuta cada función, de menor a mayor tiempo.(se hace en orden de los milisegundos)
const consultarDatabase1 = (callback) => {
    setTimeout(() => {
    callback("Consulta realizada");
    }, 5000);
    }
    console.log("Primera consulta al servidor");
    consultarDatabase1(function(consulta) {
    console.log(consulta);
    });
    console.log("Segunda consulta al servidor");
    consultarDatabase1(function(consulta) {
    console.log(consulta);
    });
    console.log("Más tareas a realizar..."); //se hara al principio porque el timeout no afecta.

    //Anidación de funciones asíncronas
    setTimeout(() => {
        console.log("Hola")
        setTimeout(() => {
            console.log("Adiós");
        }, 500);
    },1000);

    setTimeout(() => {
        console.log("Buenas tardes");
    },100)
    console.log("Buenos dias");