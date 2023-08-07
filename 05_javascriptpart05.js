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

console.log(twitterpost)
console.log(twitterpost.location = "Mumbai") // To change value of location from "Delhi" to "Mumbai"
console.log(twitterpost)

console.log(twitterpost.gender = "Male") // To add new key gender and set its value to male
console.log(twitterpost)

console.log(delete twitterpost.gender) // To delete key and value of gender
console.log(twitterpost)