var num1=1; // Global Scope

console.log(num1);

function fun(){
    var num2=2; // Local Scope
    console.log(num2);
}
fun();
