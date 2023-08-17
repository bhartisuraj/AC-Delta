/************************ JavaScript part07 ************************/

/************************ this keyword in JavaScript:- This keyword refers to an object that is executing the current piece of code. ************************/
const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
      console.log(this);
      // let avg = (this.eng + this.math + this.phy) / 3;
      // console.log(avg);
      // console.log(`${this.name} got avg marks ${avg}`);
    }
  }
  
  // console.log(student.name);// To write value of some key(object name.key)
  // console.log(student.getAvg());// When we call it, it will throw error eng is not defined because it can't access value above getAvg's(){ } scope. If we write  this.eng it means we have defined value of eng in same object but not in same scope.
  
  //When we console this/window on browser it will show this method has stored window object with window functions in it)(windows functions like alert, prompt etc). that's why window.alert("Hello") and alert("Hello") are same.
  function getAvg() {
    console.log(this);
  }