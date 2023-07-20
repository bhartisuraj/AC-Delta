/*Trim method remove whitespacefrom both ends of string and return newone (not from center)*/
// let str = "    suraj bharti";
// let methodTrim = str.trim();
// console.log(methodTrim);

/*toUpperCase converts text/string to all upper case statement and toLowerCase converts text/string to all lower case statement*/
// let str = "SuRAj"
// let upperstatement = str.toUpperCase();
// console.log(upperstatement);
// let lowerstatement = str.toLowerCase();
// console.log(lowerstatement);

/*String method with argument(Arguments are some value which we pass to methods) */
// let str = "suraj";
// let findValue = str.indexOf("r");
// console.log(findValue)

/*Slice method helps you to selects specific part of sentence*//*If we provide any negative value then it will be converted to text.length -neg value*/

// let text = "helLO";
// let newStartText = text.slice(0,1);
// let startingWord = newStartText.toUpperCase();
// let remainingText = text.slice(1,text.length);
// let newRemainingText = remainingText.toLowerCase();
// console.log("New text is "+ startingWord+newRemainingText);
// console.log(`New text is ${startingWord}${newRemainingText}`);

/*Replace:- Searches a value in the string & returns a new string with the value replaced and Repeat Method :- returns a string with the numbers of copies of a string */

// let str = "ILoveCoding";
// let newStr1 = str.replace("Love","Do");
// console.log(newStr1)
// let newStr2 = str.repeat(3);
// console.log(newStr2)
// let str = " help!"
// console.log((str.trim()).toUpperCase());

/*Arrays:- Linear collections of things. Arrays are mutable(changeable)*/

// let students = ["aman", "shradha", "suraj", "rohit"];
// console.log(students);
// console.log(students.length); // to find length of array
// console.log(students[0]); // to view what element is stored on zero(0th) index
// console.log(students[0][0]); // to view what element is stored on zero(0th) index and what is of 0th index.

// let newArray = [] // to create empty array

// let fruits = ["apple", "grapes", "mango"];
// console.log(fruits);

// fruits[0] = "banana";
// console.log(fruits);

// let cars = ["audi", "bmw", "maruti", "volvo"];
// cars.push("toyota");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("toyota");
// console.log(cars);
// cars.shift();
// console.log(cars);

// console.log(cars)
// console.log(cars.indexOf("maruti")) // Shows value is on what index.

// console.log(cars.includes("maruti")) // Checks whether that element is present or not - gives value as true or false - true
// console.log(cars.includes("ferrari")) // Checks whether that element is present or not - gives value as true or false - false

// let start = ["january", "july", "march", "august"]
// console.log(start)
// console.log(start.length);
// start.shift();
// console.log(start)
// start.shift();
// console.log(start)
// start.unshift("june");
// console.log(start)
// start.unshift("july");
// console.log(start)

// let primary = ["red", "yellow", "blue"];
// console.log(primary);
// let secondary = ["orange", "green", "pink"];
// console.log(secondary);
// console.log(primary.concat(secondary)); // Adds two string
// console.log(primary.reverse());// reverse an array

/*Slice - copies a portion of array. Changes are done in copies*/
// let cars = ["audi", "bmw", "maruti", "volvo"];
// console.log(cars.length);
// console.log(cars.slice(2, 4)); // copy from 2nd index till 4th
// console.log(cars.slice(1)); // copy all from 1st index
// console.log(cars.slice(-2));

/*Splice - Changes are done in original array list. Splice : removes/replace/add elements in place. splice(start, deleteCount, item0...itemN)*/
// let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors)
// console.log(colors.splice(4))// Select all from index 4
// console.log(colors) //New changed array list
// console.log(colors.splice(0, 2)) //Delete 2 elements starting from 0 not including 2nd index
// console.log(colors)
// console.log(colors.splice(0, 1, "black", "grey"))// have to add text in place of zero th index and have to remove how many elements is 1
// console.log(colors)

/* Sort:- sort an array. Sort methods runs differently on strings and numbers*/
// let name = ["suraj", "rohit", "rajesh", "ashok", "umesh"];
// console.log(name.sort())

// let marks = [10, 31, 19, 54, 4]
// console.log(marks.sort())

// let start = ["january", "july", "march", "august"]
// console.log(start.splice(0, 2, "july", "june"))
// console.log(start)

// let tech = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"]
// console.log(tech.indexOf("javascript"))
// let reverseArray = tech.reverse();
// console.log(reverseArray.indexOf("javascript"))

// let game = [["x",null,"o"], [null,"x",null], ["o",null,"x"]]
// console.log(game);
// console.log(game[0][1]);
// game[0][1] = "o";
// console.log(game);

/* Qs1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example: for array[7,9,0,-2] and n=3 Print,[7,9,0] 

let array = [7, 9, 0, -2]
let n = 3;
let ans = array.slice(0, n)
console.log(ans)*/

/*Qs2. Write a JavaScript program to get the last n elements of anarray.[n can be any positive number]. Forexample: forarray[7,9,0,-2] and n=3 Print,[9,0,-2]

let array = [7, 9, 0, -2]
let n = 3;
let ans = array.slice(0, array.length - n)
console.log(ans)*/

/*Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Enter the sting");

if (str.length == 0) {
    console.log("string is empty");
}
else {
    console.log("string is not-empty");
}*/

/*Qs4. Write a JavaScript program to test whether the character at the given(character)index is lowercase.

let str = "SURAJ"
let idx = 3;
console.log("Text is lowercase")

if(str[idx] == str[idx].toLowerCase()) {
    console.log("Text is lowercase")
}
else {
    ("Text is not lowercase")
}*/

/*Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let string = "              hello world        "
console.log(string.trim());*/

/*Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ['Strawberry', 'Chocolate', 'Raspberry', 'Vanilla', 'Double Chocolate Deluxe'];
console.log(arr.includes("Double Chocolate Deluxe"));*/