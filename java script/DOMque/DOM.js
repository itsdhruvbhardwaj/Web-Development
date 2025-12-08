let heading = document.querySelector("h2");
// console.dir(heading)
// console.dir(heading.innerText)
heading.innerText = heading.innerText + " from Apna College students";

let divs = document.querySelectorAll(".box");
console.dir(divs)

let idx=1;
for(div of divs)
{
    div.innerText=`div with value ${idx}`;
    idx++;
}


