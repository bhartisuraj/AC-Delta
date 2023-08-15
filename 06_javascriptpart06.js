/************************ JavaScript part06 ************************/

/************************ Functions in JS ************************/
function hello() {
  console.log("Hello");
}
// hello();

/************************ if else plus Functions in JS ************************/
// function isAdult() {
//         let age = 15;
//         if(age>17) {
//                 console.log("You are an adult");
//         } else {
//                 console.log("You are not an adult");
//         }
// }
// isAdult()

/************************ for loop plus Functions in JS ************************/

function print(){
  for (let i = 0; i<=5; i++) {
          console.log(i);
  }
}
// print()

/************************** Function that prints a poem **************************/
function poem2(){
  console.log("up above world so high");
  console.log("like a diamond in the sky");
}

function poem1(){
  console.log("Twinkle Twinkle, little star");
  console.log("how i wonder what you are");
}
// poem1()
// poem2()

/************************** Function that rolls a dice **************************/
function diceRoll() {
  let num = (Math.floor(Math.random()*6)+1);
  console.log(num);
}
// diceRoll();

/************************** Function with Arguments (numbers)**************************/
// function sum(num1, num2) {
//         let sum = num1 + num2;
//         console.log(sum)
// }
// sum(51, 20)

/************************** Function with Arguments (string and numbers)**************************/
function info(name, age) {
  console.log(`My name is ${name} and age is ${age}`)
}
// info("suraj bharti", 30)
// info("rohit", 29)
// info(29) // We cant leave 1st argument blank
// info("nidhi mittal", ) // We can leave 2nd argument blank

/************************** Create a function that gives us the average of 3 numbers. **************************/
function calcAvg(a, b, c) {
  //avg = (a + b + c)/3;
  console.log((a + b + c)/3)    
}
// calcAvg(10, 20, 30)

/************************** Create a function that prints the multiplication table of a number. **************************/
function printTable(table) {
  for (let i=table; i<=table*10; i = i+table) {
          console.log(i);
  }
}
//printTable(73)

/************************** Return :- return keyword is used to return some value from the function. **************************/
// Code written after retun statement is un-reachable.
// function sum(a, b) {
  // console.log(sum);
  // addition = a + b;
  // console.log(addition);
//         return(a + b)
// }
// let s = sum(51, 25);
// console.log(s);

/************************** Create a function that returns the sum of numbers from 1 to n.(if 5 = 1+2+3+4+5) **************************/
// function getSum(n){
//         let sum = 0;
//         for (let i = 1; i<=n; i++){
//         sum +=i;
// }
//         // console.log(sum);
//         return sum;
// }

/************************** Create a function that returns the concatenation of all strings in an array ***************************/

// let str = ["hi", "hello", "bye", "!"]

// function concat(str) {
//         let result = "";

//         for(let i=0; i<str.length; i++) {
//                 result += str[i];
//         }

//         return result;
// }

/************************** Scope:- Determines the accessibility of variables, objects, and functions from different parts of the code. 1) Function, 2) Block and 3) Lexical ***************************/

/*If you define any value inside and outside function and  console.log inside function then console.log will take value of inside function but if you don't define any values inside function then console.log will take value from Global Scope*/

// let sum = 54; // Global Scope

// function calSum(a, b) {  
//         let sum = a + b; //Function Scope
//         console.log("Function scope " + sum);
// }

// calSum(20, 50);
// console.log("Global scope " + sum);

/* Block Scope:- Variables declared inside a {} block cannot be accessed from outside the block*/

// {
//         let a = 45;
//         console.log("Inside function scope " + a);
// }
// console.log("Outside function scope " + a);

  // for (let i=0; i<=5; i++) {
  //         console.log("Inside function scope " + i);
  // }

  // console.log("Outside function scope " + i);

/* Lexical Scope:- a variable defined outside a function can be accessible inside another function defined after the variable declaration*/

//         console.log("Before Initilization Outside scope " + str);

// let str = "outside";
// console.log("After Initilization Outside scope " + str);
// {
  
//         console.log("2nd function Before Initilization inside scope " + str);
//         }
// {
//         console.log("Before Initilization inside scope " + str);     
// let str = "inside";
// console.log("After Initilization inside scope " + str);
// }
// {
  
// console.log("2nd function After Initilization inside scope " + str);
// }

/************************ Practice Qs - What will be the output ************************/

// let greet  = "hello";
// function changeGreet() {
//         let greet = "namaste";
//         console.log(greet);

//         function innerGreet() {
//                 console.log(greet);
//         }
// }

// console.log(greet);
// changeGreet();

/************************ Function Expressions ************************/

// let name = "shraddha";

// let sum = function(a, b) {
//         // console.log(a+b);
//         return a+b;
// }

// sum(1,2)

/* usually to call this we use function's name but, here we will use variable name ie sum*/

// let greeting = function() {
//         console.log("hello");
// }
// greeting()

/*Higher Order functions:- A functions that does one or both: takes 1. one or multiple functions as arguments, 2. returns a function*/

// function multipleGreet(func, n) { // higher order function
//         for(let i=1; i<=n; i++) {
//                 func();
//         }
// }

// let greet = function() {
//         console.log("hello");
// }

// multipleGreet(greet, 5)
// multipleGreet(function(){console.log("namaste");}, 5)

/*Higher Order functions:- Even, Odd number checker*/

// function oddOrEvenFactory(request) {
//         if(request == "odd") {
//                 return function(n) {
//                         console.log(!(n%2 == 0));
//                 }
//         } else if (request == "even") {
//                 return function(n) {
//                         console.log(n%2 == 0);
//                 }
//         } else {
//                 console.log("wrong request")
//         }
// }
// let request = "odd"; // even

/* Methods:- Actions that can be performed on an object */

// const calculator = {
//         num:55,

//         add: function(a, b) {
//                 return a+b;
//         },
//         sub: function(a, b) {
//                 return a-b;
//         },
//         mul: function(a, b) {
//                 return a*b;
//         }
// };

/* Methods(Shorthand) */
const calculator = {
  num:55,

  add(a, b) {
          return a+b;
  },
  sub(a, b) {
          return a-b;
  }
};

/************************** Assignment(part06) **************************/

//1 Write a JavaScript function that returns array elements which is larger than a number

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// //elements larger than a number
// function getElements(arr, num){
//   for (i=0; i<arr.length; i++) {
//     if (arr[i]>num) {
//       console.log(arr[i]);
//     }  
//   }
// }

// getElements(arr,num)

//2 Write a JavaScript function to extract unique characters from a string.

// let str = "abcfabcdefgggh"

//function to get string with all unique elements
// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i<str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//     // if current character is not added, then add it in ans.
//     // Otherwise it is a duplicate.
//     ans += currChar;
//     }
//   }
//   //console.log(ans);
//   return ans;
// }
// getUnique(str);

//3 Write a JavaScript function that accepts a list of country name as input and returns the country name as output.

// let country = ["Australia", "Germany", "United States of America"];

// function longestName(country) {
//   let ansIdx = 0;
//   for (let i=0; i < country.length; i++){
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen>ansLen) {
//       ansIdx = i;
//     }
//   }
//   console.log(country[ansIdx]);
//   return country[ansIdx]
// }
// longestName(country)

//4 Write a JavaScript function to count the number of vowels in a String argument.

// let str = "apnacollege";

// function countVowels(str) {
//   for(let i=0; i<str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u")
//       {
//         count++;
//   }
// }

// return count;
// }

//5 Write a JavaScript function to generate arandom number with in a range(start,end).

// let start = 100;
// let end = 200;

// function numberGenerator(start, end) {
//   let diff = end - start;
//   console.log(Math.floor(Math.random() * diff) + start);
//   return Math.floor(Math.random() * diff) + start;
// }
// numberGenerator(start, end)