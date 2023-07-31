/************************ JavaScript part02 ************************/

/************************ console.log() ************************/
// console.log("Suraj", "Bharti", 27 + 3);

/************************ Linking JS file in HTML ************************/
// <script src="app.js"></script> // script tag and in src attribute we write source path
// Normally we link js file before end of body tag
// console.log("Hello World");
// console.log("Suraj Bharti");
// let x = 30;
// let y = 40;
// console.log("sum is " + Number(x + y));

/************************ Template literals - They are used to add embedded expression in a string. They are denoted bu back ticks (``) ************************/
// let pencilPrice = 10;
// let eraserPrice = 5;
// let totalPrice = pencilPrice + eraserPrice;
// console.log("The total price is : ", pencilPrice + eraserPrice,"Rupees.");
// console.log(`The total price is :  ${totalPrice} Rupees.`);
// console.log(`The total price is :  ${pencilPrice + eraserPrice} Rupees.`);

/************************ Operators in JS ************************/
// Arithmetic (+, -, *, /, %, **)
// Unary(++, --)
// Assignment(=, +=, -=, *=, /=, %= etc.)
// Comparison
// Logical

// Arithmetic (+, -, *, /, %, **)
// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b); // a power b. means 10*5 times

// Unary (++, --)
// let a = 10;
// let b = 5;
// console.log(a++);
// console.log(++b);

/************************ Comparision Operators - Comparision Operators to compare 2 values.(>, >=, <, <=, == !=) ************************/
// let age = 25;
// if (age != 18){
//   console.log("You can't vote");
// }
// else{
//   console.log("You can vote");
// }

/************************ Conditional statements ************************/
// if-else
// let age = 23;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you should vote");
// }

/************************ Practice Qs - Traffic Light System ************************/
// let color = "green";
// if (color === "red") {
//   console.log("Stop");
// }
// if (color === "yellow") {
//   console.log("Slow down");
// }
// if (color === "green") {
//   console.log("Go");
// }

/*********************** Practice Qs - else if statement ***********************/
// let size = "L"
// if (size === "XL") {
//   console.log("Price is 250");
// }
// else if (size === "L") {
//   console.log("Price is 200");
// }
// else if (size === "M") {
//   console.log("Price is 100");
// } else {
//     console.log("Price is 50");
// }

/************************ else if using Strings ************************/
// let button = "signup";
// if (button == "login") {
//   console.log("User can purchase");
// } else if (button == "signup") {
//   console.log("login or sign up");
// } else {
//   console.log("Guest account");
// }

/************************ Nested if else ************************/
// let marks = 79;
// if (marks >= 33 ){
//     if (marks >= 80) {
//       console.log("A+ grade")
//     }
//     else if (marks >= 70 || marks <= 79) {
//       console.log("A grade")
//     }
//     else {
//       console.log("Just pass class");
//     }
// }
// else {
//   console.log("Better luck next time");
// }

// let age = 15;
// if (age >= 18 ){
//   if (age >= 21) {
//       console.log("Both Male and Female can marriage")
//     }
//     else if (age >= 18 || age <= 20) {
//       console.log("Only Female can marrage")
//     }  
// }
// else {
//   console.log("Both can't marrage ");
// }

/************************* Practice Qs - if else and logical operators *************************/
// let  str = 'apple';
// if((str[0] === 'a') && (str.length > 3))
// {
//   console.log("Its a good string")
// }
// else {
//   console.log("Its a bad string")
// }

// let num = 12;
// if((num%3 === 0) && ((num + 1 == 15) || (num - 1 == 11)))
// {
//   console.log("safe");
// } else { 
//   console.log("not safe");
// }

/************************** truthy and falsy value - Everything in JS is true or false(in boolean context). This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.**************************/

/************************** Switch statement **************************/

// let color = "red";
// switch(color) {
//   case "red": console.log("stop");
//   break;
//   case "yellow": console.log("slow down");
//   break;
//   case "green": console.log("GO");
//   break;
//   default: console.log("Broken Light");
//   break;
// }

/************************** Practice Qs Switch statement **************************/
// let day = 4;
// switch(day) {
//   case 1: console.log("Monday");
//   break;
//   case 2: console.log("Tuesday");
//   break;
//   case 3: console.log("Wednesday");
//   break;
//   case 4: console.log("Thursday");
//   break;
//   case 5: console.log("Friday");
//   break;
//   case 6: console.log("Saturday");
//   break;
//   case 7: console.log("Sunday: fun day");
//   break;
//   default: console.log("Wrong day!");
//   break;
// }

/************************** Alert & Prompt **************************/
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = firstName + lastName;
// alert(`Your first name is ${firstName} and your last name is ${lastName}, your full name is ${firstName} ${lastName}`)
// console.log(`Your first name is ${firstName} and your last name is ${lastName}, your full name is ${firstName} ${lastName}`)
// console.warn(`Your first name is ${firstName} and your last name is ${lastName}, your full name is ${firstName} ${lastName}`)
// console.error(`Your first name is ${firstName} and your last name is ${lastName}, your full name is ${firstName} ${lastName}`)

/************************** Assignment(part02) **************************/

// let num = 20;
// if (num%10 === 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

/****************************************************/
// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// alert(`${userName} and ${userAge} years old.`);

/****************************************************/
// let monthInQuarter = 1;
// switch(monthInQuarter) {
//   case 1: console.log("January, February, March");
//   break;
//   case 2: console.log("April, May, June");
//   break;
//   case 3: console.log("July, August, September");
//   break;
//   case 4: console.log("October, November, December");
//   break;
//   default: console.log("Quarter");
//   break;
// }

/****************************************************/
// let string = "apples";
// if ((string[0] == "A" || string[0] == "a") && (string.length >= 5))
// {
//   console.log("golden");
// } else { 
//   console.log("not golden");
// }

/****************************************************/
// let a = 5;
// let b = 15;
// let c = 10;

// if ((a>b) && (a>c)){
//   console.log("a is greater")
// }
// else if ((b>a) && (b>c)) {
//   console.log("b is greater")
// }
// else {
//   console.log("c is greater")
// }