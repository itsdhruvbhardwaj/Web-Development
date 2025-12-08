alert("hello");

console.log(document);
console.dir(document); //to access object

// document.body.style.background="red"

let Button = document.getElementById("button") //to access object by id
console.dir(Button);
//to change button style:
Button.style.backgroundColor="black"
Button.style.color="white"


let Heading = document.getElementsByClassName("heading"); //to access html collections by giving them a class
console.dir(Heading);
console.log(Heading)

let para = document.getElementsByTagName("p") //to access object by tag names
console.log(para);
console.dir(para)

//to access atributes i stags
let id=document.querySelector("#button")

//but generally we don't use them we use querySelectr
//for first element
let firstEl = document.querySelector("p") //for tags
console.dir(firstEl);

let firstEle = document.querySelector(".heading") //for class
console.dir(firstEle);

let firstElem = document.querySelector("#button") //for id
console.dir(firstElem);

//for all elements
let AllEl = document.querySelectorAll("p") //for tags
console.dir(AllEl);

let AllEle = document.querySelectorAll(".heading") //for class
console.dir(AllEle);

// let firstElem = document.querySelectorAll("#button") // can not apply for all id as id is only one  
// console.dir(firstElem);

//to access atributes of tags
let idd =document.querySelector("#button")
console.log(idd.getAttribute("id"))

//to change attribute name
console.log(idd.setAttribute("id", "id3"))