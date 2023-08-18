/************************ JavaScript part07 ************************/

/************************ this keyword in JavaScript:- This keyword refers to an object that is executing the current piece of code. (any object which is executing current method is only this)************************/
// const student = {
//   name: "shradha",
//   age: 23,
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     console.log(this);
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(avg);
//     console.log(`${this.name} got avg marks ${avg}`);
//   }
// }

// console.log(student.name);// To write value of some key(object name.key)
// console.log(student.getAvg());// When we call it, it will throw error eng is not defined because it can't access value above getAvg's(){ } scope. If we write  this.eng it means we have defined value of eng in same object but not in same scope.

//When we console this/window on browser it will show this method has stored window object with window functions in it)(windows functions like alert, prompt etc). that's why window.alert("Hello") and alert("Hello") are same.
// function getAvg() {
//   console.log(this);
// }

/************************ try and catch :- The try statement allows you to define a block of code to be tested for a block of code to be tested for errors whilt it is being executed. 
The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.************************/


// console.log("Hello1");
// console.log(a);
// console.log("Hello2");


// console.log("Hello1");
// let a = 5;
// try {
//   console.log(a);
// }
// catch(error) {
//   console.log("caught an error... a is not defined");
//   console.log(error);
// }
// console.log("Hello2");

/************************ Miscellaneous Topic:- ************************/
//Arrow functions:- Normal functions are standalone functions, But arrow functions are not. They are usually assigned to variable.

const sum = (a, b) => { 
    console.log(a+b);
  };
  
  const cube = n => {
    return n*n*n;
  };
  
  const hello = () => {
    console.log("Hello World");
  }
  // If we have single variable in ()parentheses then we can ignore parentheses.
  
  /************************ Implicit Return in Arrow Functions:- If any function is not doing much just returning value then we can make compact our arrow function by removing return keyword. and by replacing by {}curly braces by ()parentheses. ************************/
  
  const mul = (a, b) => (
    a*b
  );