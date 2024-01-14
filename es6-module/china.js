const laptop = "Asus laptop, Hp Laptop";

function mobilePhone() {
  console.log("Mobile Phone From China");
}
class china {
  toy() {
    alert("Toys Imported From China");
  }
}
// no name export
class cow {
  cw() {
    alert("Cow Exported From china");
  }
}
export { laptop, mobilePhone, china };
export default cow;
