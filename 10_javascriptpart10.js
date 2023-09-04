/************************ JavaScript part10 ************************/
/************************ JS-DOM Events:- Events are signals that something has occured(user inputs/actions) ************************/
// <button onclick="console.log('photo was liked');">Like this photo</button> // This is inline events but normally not used.

/************************ JS-DOM Events(mouse/pointer events) ************************/
// let btn1 = document.querySelector(".button1");
// console.dir(btn1)
// btn1.onmouseenter = function(){
//   console.log("You enter button3 range");
// }
// btn1.onclick = function(){
//   console.log("button1 was clicked");
// }

// function sayHello() {
//   alert("Hello")
// }
// btn1.onclick = sayHello;

// let btn2 = document.querySelector(".button2");
// btn2.onclick = function(){
//   console.log("button2 was clicked");
// }

// let btn3 = document.querySelector(".button3");
// btn3.onmouseenter = function(){
//   alert("You enter button3 range");
// }

/************************ EventsListener ************************/
// When we click on button multiple value should be trigger it can done by helf of EventListener.
// element.addEventListener( event(click,drag etc) , callback )