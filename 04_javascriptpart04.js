/************************ JavaScript part04 ************************/

/************************ Loops:- used to iterate a piece of code ************************/

/************************ For loop forward ************************/
// for (let i = 1; i <= 5; i=i++) {
//     console.log(i);
// }

/************************ For loop backward ************************/
// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

/************************ For loop for odd numbers ************************/

// for (let i = 1; i <= 15; i = i+2) {
//     console.log(i);
// }

/************************ For loop for even numbers ************************/

// for (let i = 2; i <= 10; i = i+2) {
//     console.log(i);
// }

/************************ multiplication table for 5 ************************/

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

/************************ multiplication table for 5 ************************/
// let n = parseInt(prompt("Enter number"));
// for (let i = n; i <= n*10; i = i + n) {
//     console.log(i);
// }

/************************ nested loop ************************/

// for (let i = 1; i <= 5; i++) {
//         console.log("Outer loop " + i);
//         for (let j = 1; j <= 3; j++) {
//                 console.log(`Set ${j}`);
//             }
//     }

/************************ while loop ************************/

// let i = 1;
// while(i<=5) {
//         console.log(i);
//         i++;
// }

/************************ Backward while loop ************************/
// let i = 5;
// while(i>=1) {
//         console.log(i);
//         i--;
// }

/************************ while loop ************************/

// let i = 1;
// while(i<=10) {
//         console.log(i);
//         i = i+2;
// }

/************************ Favorite Movie ************************/

// let favMovie = "avatar";
// let guess = prompt("Enter your guess");

// while ( (guess != favMovie) && (guess!= "quit") ) {
        
//         guess = prompt("wrong guess! please try again");
// }

// if(guess == favMovie) {
//         console.log("Congress");
// }
// else {
//         console.log("you quit");
// }

/************************ break ************************/

// let i = 1;
// while(i<=10) {
//         if(i==6) {
//                 break;
//         }
//         console.log(i);
//         i++;
// }

/************************ Favorite Movie (using break keyword)************************/

// let favMovie = "avatar";
// let guess = prompt("Enter your guess");

// while ( (guess != favMovie) ) {
//         if((guess == "quit")) {
//                 console.log("you quit");
//                 break;
//         }
//         guess = prompt("wrong guess! please try again");
// }

// if(guess == favMovie) {
//         console.log("Congress");
// }

/************************ Loops with Arrays ************************/

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let i=0; i<fruits.length; i++) {
//         console.log(i, fruits[i]);
// }

/************************ Nested Loops with Nested  Arrays ************************/

// let heroes = [
//         ["ironman", "spiderman", "thor"],["superman" ,"wonder woman" ,"flash"]]
   
// for (let i = 0; i<heroes.length; i++) {
//         console.log(`List #${i}`, heroes[i]);
//         for (let j = 0; j<heroes[i].length; j++) {
//                 console.log(heroes[i][j])
//         }
//         j
// }

/************************ for of loop : for (element of collection) ************************/

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(i of fruits) {
//         console.log(i);
// }

/************************ Nested for of loop ************************/

// let heroes = [["ironman", "spiderman", "thor"],["superman" ,"wonder woman" ,"flash"]]

// for(list of heroes) {
//         console.log(list);
//         for(individualArray of list) {
//                 console.log(individualArray);
//         }
// }

/************************ Just JS Project - to-do app ************************/

// let todo = [];

// let req = prompt("Please enter your request");

// while(true) {
//         if(req == "quit") {
//                 console.log("quitting app");
//                 break;
//         }

//         if(req == "list") {
//                 console.log("-----------------------------");
//                 for(let i=0; i<todo.length; i++) {
//                         console.log(i, todo[i]);
//                 }
//                 console.log("-----------------------------");
//         } else if(req == "add") {
//                 let task = prompt("Please enter the task you want to add");
//                 todo.push(task);
//                 console.log("task added");
//         }else if(req == "delete") {
//                 let idx = prompt("Please enter the task index");
//                 todo.splice(idx, 1);
//                 console.log("task deleted");
//         } else {
//            console.log("wrong request");     
//         }
//         req = prompt("Please enter your request");
// }

/************************** Assignment(part04) **************************/

/* Write a JS program to delete all occurrences of element 'num' in a given array. 
*/

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 3;
// console.log(`Starting array list is ${arr}`);
// for(let i=0; i<arr.length; i++) {
//         if(arr[i] == num) {
//                 arr.splice(i, 1);
//         }
// }
// console.log(`Currently array list is ${arr}`);


/* Write a JS program to find the numbers of digits in a number 
*/

// let number = 287152;
// let count = 0;
// let copy = number;
// console.log(count);
// while(copy>0) {
//         count++;
//         copy = Math.floor(copy/10);
// }
// console.log(count);

/* Write a JS program to find the sum of digits in a number 
*/

// let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy>0){
//         digit = copy%10;
//         sum+= digit;
//         copy = Math.floor(copy/10);
// }
// console.log(sum);

/* Print the factorial of a number n */

// let n=7;
// let factorial = 1;
// for(let i=1; i<=n; i++){
//         factorial*=i;
// }

// console.log(`factorial of ${n} is ${factorial}`);

/* Find the largest number in an array with only positive numbers */

// let arr = [2,5,10,4,2,7,1,9];
// let largest = 0;
// for(let i=0; i<=arr.length; i++){
//         if (largest<arr[i]){
//                 largest=arr[i];
//         }
// }
// console.log(largest);