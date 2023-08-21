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

let everyMethod = [1, 2, 3].every((el) => (el%2 == 0));
console.log(everyMethod);

/*some:- arr.some(some function definition or name). It is same as every method but it checks all index's and if one of them is true then overall answer is false. It is like OR*/

let someMethod = [1, 2, 3].some((el) => (el%2 == 0));
console.log(someMethod);

/************************** Assignment(part08) **************************/