/************************ JavaScript part05 ************************/

/*Object literals used to stored keyed collections & complex entities*/

// let student = {
//         name: "shradha",
//         age: 23,
//         marks: 94.4,
//         city: "Delhi"
// };

// Above samething using arrays
// let student2 = ["shradha", 23, 94.4, "Delhi"]

/************************ Practice (Thread/Twitter Post) ************************/
// let threadpost = {
//         userName: "@surajbharti",
//         content: "This is my #firstPost",
//         likes: 50,
//         repost: 5,
//         tags: ["@varuntripathi", "@rohitpagare", "@nidhimittal"]
// };

/************************ Get Value ************************/
let twitterpost = {
    userName: "@surajbharti",
    content: "This is my #firstPost",
    likes: 50,
    repost: 5,
    location: "Delhi",
    tags: ["@varuntripathi", "@rohitpagare", "@nidhimittal"]        
};

// console.log(twitterpost["tags"][1])
// console.log(twitterpost.tags[2])
// console.log(twitterpost["content"])
// console.log(twitterpost.content)

// console.log(typeof twitterpost.userName)
// console.log(typeof twitterpost.repost)

/************************ Get Value ************************/
// JavaScript automatically converts objects keys to strings.
// Even if we made the number as a key, the number will be converted to string.

/************************ Add/Update Value ************************/

// console.log(twitterpost)
// console.log(twitterpost.location = "Mumbai") // To change value of location from "Delhi" to "Mumbai"
// console.log(twitterpost)

// console.log(twitterpost.gender = "Male") // To add new key gender and set its value to male
// console.log(twitterpost)

// console.log(delete twitterpost.gender) // To delete key and value of gender
// console.log(twitterpost)

/************************ Nested Objects (object inside object) ************************/

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city:"Delhi"
//     },
//     shradha: {
//         grade: "A",
//         city:"Pune"
//     },
//     karan:{
//         grade: "O",
//         city:"Mumbai"
//     }    
// };


// console.log(classInfo); //To get info about object ie classInfo
// console.log(classInfo.shradha); //To get info about object ie shradha which is inside classInfo
// console.log(classInfo.shradha.city); //To get info about key  ie city which is inside shradha and which is inside classInfo.

/************************ Arrays of Objects (storing information of multiple students) ************************/

const classInfo = [
    {
            name:"aman",
            grade: "A+",
            city:"Delhi"
    },
    {
            name:"shradha",
            grade: "A",
            city:"Pune"
    },
    {
            name:"karan",
            grade: "O",
            city:"Mumbai"
    }    
]

// console.log(classInfo); // to Print whole array list.
// console.log(classInfo[1]); // To print 1st array index of classInfo ie full index of shradha.
// console.log(classInfo[1].grade); // To print 1st array index of classInfo ie full index of shradha (grade).
// console.log(classInfo[1].gender = "Female"); // To add key value in 1st array index of classInfo ie full index of shradha.
// console.log(classInfo); // to Print whole array list.

/************************ Math Object ************************/
// console.log(Math.max(10, 20, 25));// Method is used to print max of given number list.
// console.log(Math.abs(-12)); //Method is used to print absolute number ie This method will give you number in positive format inputed number is positive or negative.
// console.log(Math.pow(2, 4)); //Method pow calculate 2 to the power 4.
// console.log(Math.floor(4.1)); //Method floor converts number to whole number with nearest smallest integer value.
// console.log(Math.ceil(4.1)); //Method ceil converts number to whole number with nearest largest integer value.
// console.log(Math.random()); // This method creates random numbers.

/************************ Random Integers ************************/
// Math.random() - This method generates random numbers between 0 to 0.999999, But never reaches to 1.
// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// console.log(num);
/* 
    num * 10 --> Creates numbers between 0 to 9
    num * 11 --> Creates numbers between 0 to 10
    (num * 10) + 1 --> Creates numbers between 1 to 10
*/

/************************** Practice Question **************************/
/* Generate a random number between 1 and 100*/
// let randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 100;
// randomNumber1 = Math.floor(randomNumber1) + 1;
// console.log(randomNumber1)

/* Generate a random number between 1 and 5*/
// let randomNumber2 = Math.random();
// randomNumber2 = randomNumber2 * 5;
// randomNumber2 = Math.floor(randomNumber2) + 1;
// console.log(randomNumber2)

/* Generate a random number between 21 and 25*/
// let randomNumber3 = Math.random();
// randomNumber3 = randomNumber3 * 5;
// randomNumber3 = Math.floor(randomNumber3) + 21;
// console.log(randomNumber3)

/************************** Guessing Game **************************/

// const max = prompt("Enter the max number");

// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Guess the number");
// while(true) {
//         if(guess == "quit") {
//                 console.log("User quit");
//                 break;
//         }

//         if(guess == random) {
//                 console.log(`You are right! congrats!! random number was ${max}`);
//                 break;
//         } else if(guess < random) {
//                 guess = prompt("Hint: Your guess was too small. please try again")
//         } else {
//                 guess = prompt("Hint: Your guess was too large. please try again")
//         }
// }

/************************** Assignment(part05) **************************/

/* Create a program that generates a random number represent a dice roll. 1 to 6*/

// let diceRoll = (Math.floor(Math.random() * 6)) + 1;
// console.log(diceRoll);

/* Create an object representing a car that stores the following properties for the car: name, model, color*/

// let car = {
//         name: "honda",
//         model:"city",
//         color:"black"
// };
// console.log(car.name);

/* Create an object Person with teir name, age and city. Edit their city's original value to change it to "New York". Add a new property country and set it to the United States*/

// let person = {
//         name: "Jhon",
//         age: 30,
//         city: "Austin"
// };
// console.log(person);
// console.log(person.city = "New York");
// console.log(person.country = "United States");
// console.log(person);