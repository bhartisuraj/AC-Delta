/************************ JavaScript part06 ************************/

/************************ Functions in JS ************************/
function hello() {
    console.log("Hello");
}
// hello();

/************************ if else plus Functions in JS ************************/
function isAdult() {
    let age = 15;
    if(age>17) {
            console.log("You are an adult");
    } else {
            console.log("You are not an adult");
    }
}
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
function sum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum)
}
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