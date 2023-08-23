/************************ JavaScript part08 ************************/

/************************ Array Methods:- Call back methods ************************/
/*forEach:- arr.forEach(some function definition or name). Works on all index inside array's String*/
//  let arrEg1 = [1, 2, 3, 4, 5];

//  arrEg1.forEach((el) => {//Using Arrow function
//   console.log(el);
// });

// arrEg1.forEach(function(el) {//Using normal function
//   console.log(el);
// });

// let arrEg2 = [{
//   name:"rohit",
//   marks:95,
// },
// {
//   name:"aditi",
//   mark:91,
// },
// {
//   name:"shradha",
//   marks:99,
// },
// {
//   name:"suraj",
//   marks:94.4,
// },
// ];
// arrEg2.forEach((studt) => {
//   console.log(studt.marks)
// })

/*Map:- arr.map(some function definition or name). It is same as forEach(). Works on all index inside array's String. After applying arr.map() method it returns value but in another array list*/

// let num = [1, 2, 3, 4, 5];
// let double = num.map(function(el) {
//   return el*el;
// });
// console.log(double);

// let arrEg2 = [{
//   name:"rohit",
//   marks:95,
// },
// {
//   name:"aditi",
//   mark:91,
// },
// {
//   name:"shradha",
//   marks:99,
// },
// {
//   name:"suraj",
//   marks:94.4,
// },
// ];
// let gpa = arrEg2.map((el) => {
//   return el.marks/10;
// });

/*filter:- arr.filter(some function definition or name). Filters each array element of given array string.*/

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter(function(el) {
//   return el % 2 == 0; //even -> true, odd -> false
// });

/*every:- arr.every(some function definition or name). It is same as filter method but it checks all index's and if one of them is false then overall answer is false. It is like AND*/

// let everyMethod = [1, 2, 3].every((el) => (el%2 == 0));
// console.log(everyMethod);

/*some:- arr.some(some function definition or name). It is same as every method but it checks all index's and if one of them is true then overall answer is true. It is like OR*/

// let someMethod = [1, 2, 3].some((el) => (el%2 == 0));
// console.log(someMethod);

/* Reduce:- arr.reduce( reducer function with 2 variables for (accumulator, element)); (accumulator can be result etc, element can be el or a or b etc)Reduces the array to a single value. The output value can be anything dosent required to be always boolen*/
 
// let nums = [1, 2, 3, 4]
// let finalVal = nums.reduce((res, el) => (res+el))

/************************ Maximum in Array ************************/
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2]
// let max = arr.reduce((max, el) => {
//   if(max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });

// console.log(max);

/************************** Assignment(part08) **************************/
//Check if all numbers in our array are multiples of 10 or mot.
// let nums = [10, 40, 20, 30, 42]
// let ans = nums.every((el) => el % 10 == 0); //even -> true, odd -> false
// console.log(ans);

//Create a function to find the min number in array.
// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2]

// let min = arr.reduce((min, el) => {
//   if(min > el) {
//     return el;
//   } else {
//     return min;
//   }
// });
// console.log(min);

/*Default Parameters:- Gives a default value to the arguments*/

// function sum(a, b=2) {
//   return  a + b; 
// }

/*Spread:- Expands an iterable into multiple values*/

// let arr = [5, 4, 2, 5, 6, 7, 2, 9, 2]

// console.log(Math.min(...arr));
// console.log(Math.min(arr));

// let str = "suraj"
// console.log(...str);
// let name = `hello`;
// console.log(...name);

// let odd = [1, 3, 5, 7, 9];
// let even = [ 2, 4, 6, 8, 10];
// let nums = [odd +" "+ even];
// console.log(nums);

/*Spread Method on Objects*/
// const data = {
//   email: "ironman@gmail.com",
//   password: "scarlett",
// }
// const dataCopy = {...data, id:123, country:"India"};
// console.log(dataCopy);

// let arr1 = [5, 4, 2, 5, 6, 7, 2, 9, 2]
// let obj1 = { ...arr1 }
// console.log(obj1);

/*Rest: It is opposite of spread method  */

// function sum(...args) {
//   //arguments
//   for(let i = 0; i < args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

/*Destructuring:- Storing values of array into multiple variables*/
// let names = ["tony", "bruce", "peter", "steve", "anderson"]
// let [winner, runnerup, others] = names;

/*Destructuring of objects:- */

// const student = {
//   name:"karan",
//   age: 14,
//   class:9,
//   subjects: ["hindi", "english", "math", "science"],
//   username: "karan@123",
//   password: "abcd",
//   city : "Pune"
// }

// let {username:user , password: secret, city = "Mumbai"} = student
// console.log(student);

/************************** Assignment(part08) **************************/

// Square and sum the array elements using the arrow function and then find the average of the array.

// let nums = [1, 2, 3, 4, 5];// [1, 4, 9, 16, 25]
// let square = nums.map((nums) =>
// nums*nums);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

// Create a new array using the map function whose each element is equal to the original element plus 5

// let numbers = [2, 4, 6, 8, -2, -4];

// console.log(numbers.map((number) => numbers+ " " + 5));

// Create a new array whose elements are in uppercase of words present in the original array.

// let names = ["tony", "bruce", "peter", "steve", "anderson"];
// console.log(names.map((names) => names.toUpperCase()));

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr,...args) =>
// [
//   ...arr,
//   ...args.map((v)=>v*2),
// ];
// console.log(doubleAndReturnArgs([1,2,3],4,4));//[1,2,3,8,8]
// console.log(doubleAndReturnArgs([2],10,4));//[2,20,8]

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:3,d:4});//{a:1,b:2,c:3,d:4}