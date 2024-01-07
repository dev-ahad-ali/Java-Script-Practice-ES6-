function sum1(){
    var x=4;
    var y=6;
    return x+y;
}
function sum2(){
    var z=10;
    return sum1()+z;
}
function sumAll(){
    return sum2()+20;
}
console.log(sumAll());