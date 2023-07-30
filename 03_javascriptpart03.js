/************************ JavaScript part03 ************************/

/************************ String Methods - actions that can be performed on objects. Strings in JavaScript are immutable ************************/
/************************ str.trim() - Trim whitespaces from both ends of string & returns a new one. ************************/

let str = "   I love coding  " 
//let str = prompt("Enter your text")
// console.log(str.trim()); // str.trim() - Trim whitespaces from both ends of string & returns a new one.
// console.log(str.toLowerCase());// str.toLowerCase() - changes text case to lower case
// console.log(str.toUpperCase());// str.toUpperCase() - changes text case to upper case

/************************ String Methods with Arguments - Arguent is a some value that we pass to the method. (str) ************************/

// console.log(str.indexOf("love")); // Calculates the first letter of defined string(letter l). If asked letter which is not available in string then it will show (-1). 

// console.log(str.indexOf("o"));// If we ask to search some letter and that letter is present in string more than 1 time, then it will show result for first letter.

// console.log(str.toUpperCase().trim());// If we want to apply two methods on any string then we can perform method chaning.

// let newStr = "Ilovecoding"
// console.log(newStr.length);

// console.log(newStr.slice(1,6))// slice - returns a part of the original string as a new string. Here we give 2 parameter where 1st is starting index and 2nd is ending index. and if we give just starting value the js will assume ending index = newStr.length (newStr.slice(1)) like (newStr.slice(1,newStr.length));

// console.log(newStr.slice(-5)) // Of we give value in negative it will assume as total string length - 5.// Mean it will -5 from total length of string ie 11 it will print oding.

// console.log(newStr.replace("love", "do")) // .replace() method is used to replace targeted text 1st is what text and 2nd is with what text.

// console.log(newStr.replace("o", "x")) // If we try to replace some text which is 2 or more time in sentence then it will replace the text which is in 1st occured text will be replaced.

// console.log(newStr.repeat(3)) // Returns a string with the number of copies of a string.

/************************ Practice Qs - chaining method ************************/
// let msg = "help";
// console.log(msg.trim().toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4, 9));

// console.log(name.indexOf("na"));

// console.log(name.replace("Apna", "Our"));

// console.log(name.slice(4, 11).replace("l", "t").replace("l", "t"))

/************************ Array (Data Structure) Linear collection of things ************************/

let sudents = ["aman", "shradha", "rajat", "suraj"]
let info = ["suraj", 30, 5.6] // We can store mix elements in array 

// console.log(info) // to view whole array list
// console.log(info.length) // to check length of array list
// console.log(sudents) // to view whole array list

// console.log(sudents[2]) // to view specific element in array list

// console.log(typeof sudents) // typeof array is object

/************************ Array are Mutable ************************/

// let string = "rohit";
// console.log(string);

// string[0] = "m";
// console.log(string[0]);

// let fruits = ["mango", "apple", "litchi"]
// console.log(fruits)
// fruits[0] = "banana";
// console.log(fruits)

// Starting fruits has 3 elements mango, apple and litchi but we changed mango to banana now the original array list got changed as banana, apple and litchi

/************************ Array Methods ************************/

// let cars = ["audi", "bmw", "maruti"]
// console.log(cars)
// cars.push("xuv") // adds element to last in created array list.
// console.log(cars)
// cars.pop(); // removes element from last in created array list.
// console.log(cars)
// cars.unshift("xuv") // adds element to the first in created array list.
// console.log(cars)
// cars.shift(); // removes element from first in created array list.
// console.log(cars)

/************************ Practice Qs - chaining method ************************/

// let months = ["january", "july", "march", "august"];
// console.log(months);

// months.shift();
// months.shift();
// console.log(months);

// months.unshift("june");
// months.unshift("july");
// console.log(months);

/************************ IndexOf & includes Method ************************/