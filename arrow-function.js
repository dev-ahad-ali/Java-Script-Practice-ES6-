var myArrow1=(...x)=>{
    console.log(x)
}
myArrow1(1,2,3,4);

// Arrow function returns as a anonymous function it cannot return on its own
var myArrow=()=>{
    return "Hello Arrow";
}
console.log(myArrow());
