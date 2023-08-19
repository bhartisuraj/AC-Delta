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

// const sum = (a, b) => { 
//   console.log(a+b);
// };

// const cube = n => {
//   return n*n*n;
// };

// const hello = () => {
//   console.log("Hello World");
// }
// If we have single variable in ()parentheses then we can ignore parentheses.

/************************ Implicit Return in Arrow Functions:- If any function is not doing much just returning value then we can make compact our arrow function by removing return keyword. and by replacing by {}curly braces by ()parentheses. ************************/

// const mul = (a, b) => (
//   a*b
// );

/************************ Set Timeout:- If we have to do some task but after some time or after mention time then we use Set Timeout function. Its an inbuilt function ************************/

// console.log("Hi there!");

// setTimeout(() => {
//   console.log("Surajkumar");
// }, 5000);

// console.log("my name is");

/************************ Set Interval:- Set interval is also like set Timeout but runs again and again after, defined interval ************************/

// console.log("Hi there!");

// let timer = setInterval(() => {
//   console.log("Surajkumar");
// }, 2000);

// console.log(timer);

// console.log("my name is");

/************************ this with arrow functionsl:- Set interval is also like set Timeout but runs again and again after, defined interval ************************/

// const student = {
//   name: "aman",
//   marks: 95,
//   prop: this, //global scope
//   getName: function() {
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); //parent scope
//     return this.marks;
//   },
//   getInfo1: function() {
//     setTimeout( () => {
//       console.log(this); //student
//     }, 2000);
//   },
//   getInfo2: function() {
//     setTimeout( function() {
//       console.log(this); // window
//     }, 2000);
//   },
// };

// const a = 5; //global scope

/************************ Practice Qs ************************/

// Write an arrow function that returns the square of a number 'n'.

// let getSquare = (n) => {
//   return n*n
// };
  
// Write function that prints "Hello World" 5 times at intervals of 2s each.


//    let id = setInterval(()=>{
//       console.log("Hello World");
//     }, 2000);
//     console.log(id);

//     setTimeout(() => {
//   clearInterval(id);
// }, 10000);

/************************** Assignment(part07) **************************/

//Qs1.Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

// const arrayAverage = (arr) => {
//   let total = 0;
//   for(let number of arr){
//     total+=number;
//   }
//   return total/arr.length;
// };
// let arr = [1,2,3,4,5,6];
// console.log(arrayAverage(arr));

//Qs2. Write an arrow function named isEven()that takes a single number as argument and returns if it is even or not. 

// let num = 4;
// const isEven = (num) => num % 2 == 0;