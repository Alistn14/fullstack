let a=4; 
let b=2;
if(a>b) {console.log(`a(${a}) es mayor que b (${b})`);}
document.write("b">"a");

a =3;
b="5";
//Primera condición
if(a>b) {
console.log(`a(${a}) es mayor que b (${b})`);
document.write("condición 1 a>b");
//Segunda condición
} else if (a<b) {
console.log(`b(${b}) es mayor que a (${a})`);
document.write("a"<"b");
}
//Tercera condición
else if(a===b){
console.log(`a(${a}) es igual y posee el mismo tipo que b (${b})`);
document.write("a=b valor y tipo");