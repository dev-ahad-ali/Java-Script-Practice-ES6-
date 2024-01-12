class myClass {
  myFun(name) {
    console.log(name);
  }
  myFun1(name) {
    console.log(name);
  }
  myFun2(name) {
    console.log(name);
  }
  myFun3() {
    console.log("4th Function Inside Class");
  }
  myFun4() {
    console.log("5th Function Inside Class");
  }
}
var obj = new myClass();
obj.myFun("1st Function Inside Class");
obj.myFun1("2nd Function Inside Class");
obj.myFun2("3rd Function Inside Class");
obj.myFun3();
obj.myFun4();
