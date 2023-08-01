/************************ JavaScript part03 ************************/

/************************ String Methods - actions that can be performed on objects. Strings in JavaScript are immutable ************************/
/************************ str.trim() - Trim whitespaces from both ends of string & returns a new one. ************************/

// let str = "   I love coding  " 
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

// let sudents = ["aman", "shradha", "rajat", "suraj"]
// let info = ["suraj", 30, 5.6] // We can store mix elements in array 

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
// let cars = ["audi", "bmw", "maruti"]
// console.log(cars.indexOf("maruti")) // .indexOf is used to check index of given element if present it will show its index or else it will show -1.

// console.log(cars.includes("bmw")) // .includes is used to check whether the given element is present or not. It gives output as true or false.

/************************ Concantenation & Reverse ************************/

// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];
// let alpha = ["white", "black"]

// console.log(primary.concat(secondary, alpha)); // concat is used to add two or more arrays. Merge 2 or more arrays.

// console.log(primary.reverse()); //reverse array list

/************************ Array slice method - copies a portion of an array arrays.slice(a,b) ************************/
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.slice());
// console.log(colors.slice(2)); //removed starting 2 arrays
// console.log(colors.slice(2, 4));//specified starting from 2nd arrays till 4th arrays.
// console.log(colors.slice(-2)); // printed last 2 arrays.

/************************ Array splice method - removes/replace/add elements in place. splice(start, deleteCount(optional),item0...itemN). Major difference between slice and splice is spice changes original array list where as slice do change in copy************************/
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.splice(4)); // get list from starting index 4 till last
// console.log(colors);
// console.log(colors.splice(0, 1)); // starting from 0 delete 1 numbers index.
// console.log(colors);
// console.log(colors.splice(0, 1, "black", "grey")); // starting from zero delete 1 numbers index and add black and grey in 0th and 1st place.
// console.log(colors);

/************************ Array sort method - sorts an array ************************/

// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.sort());

// let marks = [99, 89, 67, 42, 100]; 
// console.log(marks.sort()); // sort method don't behave properly on numbers, because sort methods tries to convert it into string and then sorts it.

/************************ Practice Qs - splice(), reverse(), and indexOf("") ************************/

// let months = ["january", "july", "march", "august"];
// console.log(months);
// console.log(months.splice(0, 2, "july", "june"));
// console.log(months);

// let progLang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(progLang);
// console.log(progLang.reverse().indexOf("javascript"));

/************************ Arrays References:- stores address not elements in arrays ************************/
// let arr1 = [1];
// let arr2 = [1];
// let copy1 = arr1;
// console.log(arr1==arr2);
// console.log(arr1==copy1);

/************************ const array - Constant variable usually dont change but in array we can do so. But we can't completely change the arr which we are creaated using const ************************/

/************************ Nested array - arrays of array ************************/
// let nums = [[2,4],[3,6],[4,8]];
// console.log(nums);
// console.log(nums[1][1]);

/************************ Practice Qs - nested arrays ************************/

// let nestedArr = [["X", null, "O"],[null, "X", null],["O", null, "X"]]

// console.log(nestedArr);

// nestedArr[0][1] = "O";
// console.log(nestedArr);

/************************** Assignment(part03) **************************/

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0,n);
// console.log(ans);

/****************************************************/

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans1 = arr.slice(arr.length-n);
// console.log(ans1)

/****************************************************/

// let string = prompt("please enter a string");

// if (string.length == 0)
// {
//     console.log("string is blank");
// }
// else {
//     console.log("string is not-blank");
// }

/****************************************************/

// let myName = "SurAjBharti";
// if(myName[3] == myName[3].toLowerCase()) {
//     console.log("character is lowercase");
// }
// else {
//     console.log("character is not lowercase");
// }

/****************************************************/

// let message = prompt("Enter your message");
// console.log(`${message}`);
// console.log(`String without space = ${message.trim()}`);

/****************************************************/

// let arrayList = ["Hello", "a", 2.5, 3];
// if(arrayList.includes(2.9)) {
//     console.log(`Element exist`);
// }
// else {
//     console.log(`Element doesn't exist`);
// }