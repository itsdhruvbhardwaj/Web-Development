let body= document.querySelector("body")
let ele = document.createElement("button");
ele.innerText="click me";
body.prepend(ele);
ele.style.backgroundColor="red"
ele.style.color="white"


//que2:
let para=document.querySelector("p");
// para.setAttribute("class","newClass") //this will overwrite the old class
para.classList.add("newClass")

console.log(para.classList) //will give all the class attributes of para

para.classList.remove("newClass"); //to remove the new class attribute 