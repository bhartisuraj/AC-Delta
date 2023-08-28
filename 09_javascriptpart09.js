/*JS(part09)*/
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
// textContent:- Shows all the full text. This will show text as well as text which are set to hidden. It shows text from editor.
// innerHTML:- Show the full markup. It will show text whereas shows if there any another tag is also present in full detail. <p>text text text <a href="https://www.google.com/>text</a> <p>

/************************ Manipulating Attributes ************************/