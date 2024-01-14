// Without Static Keyword
class myClass1 {
  hello1() {
    console.log("Hello World");
  }
}
var obj = new myClass1();
obj.hello1();

// With Static Keyword
class myClass2 {
  static hello2() {
    console.log("Hello World Static");
  }
}
myClass2.hello2();
