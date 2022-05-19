const a=2;
console.log("Esta parte esta antes del switch") 
switch(a){
    case 1:
        console.log('El valor de a es 1'); 
    break;
    case 2:
        console.log('El valor de a es 2'); 
    break;
    case 3,4:
        console.log('El valor de a es 3 ó 4'); 
    break;
    default:
        console.log('El valor de a es diferente');}