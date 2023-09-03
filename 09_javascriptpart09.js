/************************ JavaScript part09 ************************/
/************************ Introduction JS-DOM(Document object Model) ************************/

// The DOM represents a document with a logical tree.
// It allows us to manipulate/change webpage content(HTML elements).
// console.dir(document); // Path to know different properties of document object/ selected object.

// Have to change text in h1 tag
// console.dir(document); // Path to know different properties of document object.
// console.dir(document.all); // Now we will move to ALLCollection of HTML Document.
// console.dir(document.all[9]); // In our case H1 element is on 9th place thats why we have to select 9th one.
// console.dir(document.all[9].innerHTML); // To know what is in h1 in that HTML file.
// console.dir(document.all[9].innerText = "Peter Parker"); // To know what is in h1 in that HTML file.

/************************ Selecting Elements By ID ************************/
// document.getElementByID("id_name"):- Returns the element as an object or null(if not found) 
// document.dir(document.getElementByID("id_name")) to get its object

// Assume we have to change image then:-
// document.getElementById("mainImg").src = "assets/creation_1.png":- first we selected our img which we have to change then .src = "new_path";

/************************ Selecting Elements By ClassName ************************/
// document.getElementsByClassName("class_name")

// Changing 3small image by Spiderman's big image. Because of 3same task we are using loop.
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length; i++) {
//   smallImages[i].src = "assets/spiderman_img.png"
// console.log(`Value of image no. ${i} is changed`);
// }

/************************ Selecting Elements By TagName ************************/
//document.getElementsByTagName("tag_name") // to select element by its tag_name.
// document.getElementsByTagName("p")[1].innerText = "abc"
// document.getElementsByTagName("h1")[0].innerText = "abc"

/************************ Query Selectors:- Allows us to use any Css selector ************************/

// document.querySelector("p"); //Selects first p element
// document.querySelector("#myId"); //Selects first element with id = myId
// document.querySelector(".myClass"); //Selects first element with class = myClass
// document.querySelectorAll("p"); //Selects all p elements

// For Nesting:- We just want to select anchor tags which are inside div then we will write document.querySelectorAll("div a") :- Select anchor tags which are inside div.

/************************ Setting Content in Object ************************/
// innerText:- Shows the visible text contained in a node. Shows text inside defined element. <p>text text text<p>. It shows text from browser display.
// textContent:- Shows all the full text. This will show text as well as text which are set to hidden. It shows text from html file / editor.
// innerHTML:- Show the full markup. It will show text whereas shows if there any another tag is also present in full detail. <p>text text text <a href="https://www.google.com/>text</a> <p>

/************************ Manipulating Attributes ************************/
//obj.getAttribute( attr ) //know what is its current attribute value
//obj.setAttribute( attr,val ) //set what is its user wants to set its new attribute and value

// Steps to change spiderman image's id to spidyImg.
// First we select the object element what we want to change. let spiderImg = document.querySelector("img")
// To know whats the current value is. spiderImg.getAttribute("id")
// To change its value spiderImg.setAttribute("id","spidyImg")

/************************ Manipulating Style (with Style attribute) ************************/
// Change text color to red text in H1
// let heading = document.querySelector("h1") Selecting element and storing in some variable
// heading.style.color = "red" Setting color/style to defined element.

// Change anchor tag color of class box to green color
// let links = document.querySelectorAll(".box a")
// for (let i=0; i<links.length; i++) {
//   links[i].style.color = "green"
// }

// Change anchor tag color of class box to yellow color using for each
// let links = document.querySelectorAll('.box a')
// for(link of links) {
//   link.style.color = "yellow"
// }

/************************ Manipulating Style (using classList) ************************/
// classList.add() to add new class
// classList.remove() to remove class
// classList.contain() to check if class exists
// classList.toggle() to toggle between add & remove

//To add class - heading.classList.add(green)
//To remove class - heading.classList.remove(green)
//To check if that class is present or not - heading.classList.contains(green)
//Toggle means you can add or remove class. If present then remove, if not present then add - heading.classList.toggle(green)

/************************ Navigation on page:- To travel between elements ************************/
// parentElement will tell parent of given element
// children will tell children of given element
// previousElementSibling/nextElementSibling will tell previous and nextElementSibling of given element

// let ulTag = document.querySelector('ul'); // Selecting ulTag and storing its value in ulTag variable.
// ulTag.parentElement // What is parent of ulTag div.box
// ulTag.children //HTMLCollection(3) [li, li, li]
// ulTag.children[1].previousElementSibling //What is previous element sibling of ulTag.children[1].previousElementSibling (First apperance)
// ulTag.children[1].previousElementSibling //What is next element sibling of ulTag.children[1].nextElementSibling (Created by)

/************************ Adding elements on page ************************/
// append means to put that element in last position.
// document.createElement('p') // To create new element
// let newP = document.createElement('p'); storing new element p its in newP variable.
// newP.innerText = "Hi, I am a new p" // Setted innerText inside newP.
// let body = document.querySelector('body'); // Now selecting element where we want to append newP. We want to put newP to body so, selecting body
// body.appendChild(newP)​

// newP.append(' this is new additional text') // This will add string/element
// newP.append(btn); // This will add string/element
// newP.append(' do not click this button'); // This will add string/element

// box.prepend(newP) // This will add value of newP in starting inside box element

// insertAdjacentElement(where,element) // It tells where we want to insert our element and what element
// where has 4 values as follows
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

// p.insertAdjacentElement('beforebegin', btn)// It will create btn before para but in new line in start
// p.insertAdjacentElement('afterbegin', btn)// It will create btn before para but in same line in start
// p.insertAdjacentElement('beforeend', btn)// It will create btn after para but in same line in end
// p.insertAdjacentElement('beforeendn', btn)// It will create btn after para but in new line in end

/************************ Remove elements from page ************************/

// body.removeChild(btn) // To remove('btn') elements from body.
// h1Tag.remove(); // To remove element which is stored in h1Tag.

/************************** Practice Qs **************************/
// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red!";
// document.querySelector('body').append(para1);
// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText = "I'm blue h3!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO";

// div.append(h1)
// div.append(para2)
// div.classList.add("box")
// document.querySelector('body').prepend(div);

/************************** Assignment(part09) **************************/

// Create a new input and button element on the page using Javascript only. Set the text of button to 'Click me'?
// let button1 = document.createElement("button")
// let input1 = document.createElement("input")
// button.innerText = "Click me";

// document.querySelector("body").append(input1)
// document.querySelector("body").append(button1)

// Add following attributes to the element: 01) Change placeholder value of input to “username” 02) Changetheidofbuttonto“btn

// let input2 = document.createElement("input")
// input2.setAttribute("placeholder", "username")
// document.querySelector("body").append(input2)

// let button2 = document.createElement("button")
// button2.setAttribute("id", "btn")
// button2.innerText = "Click me";
// document.querySelector("body").append(button2)

// Access the btn using the querySelector and buttonid.Change the button backgroundcolor to blue and textcolor to white.
// let button3 = document.querySelector("#btn");
// button3.classList.add("btnStyle");

// Create an h1 element on the page and set its text to “DOMPractice” underlined.Change its color to purple.
// let h1 = document.createElement("h1");
// h1.innerHTML="<u>DOMPractice</u>";
// h1.style.color = "Purple";
// document.querySelector("body").append(h1);

// Create a p tag on the page and set its text to “ApnaCollegeDeltaPractice”, where Delta is bold.
// let pTag = document.createElement("p");
// pTag.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(pTag);