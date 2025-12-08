// let btn = document.querySelector("#btn")
// btn.onclick = () => {
//     console.log('btn was clicked')
// }

// let box = document.querySelector(".box")
// box.onmouseover = () => {
//     console.log('hovered over div')
// }

//we can also define events: will work on same code
let btn = document.querySelector("#btn")
btn.onclick = (eve) => {
    console.log(eve);
    console.log(eve.type);
    console.log(eve.target);
    console.log(eve.clintX, eve.clintY);

    console.log('btn was clicked')
}

//can do the same using event listners
let box = document.querySelector(".box")

const handler1=(evt) => {
    console.log(evt)
    console.log("div was doubleclicked")
};
box.addEventListener("dblclick", handler1)

const handler2=(evt) => {
    console.log(evt)
    console.log("div was clicked")
};
box.addEventListener("click", handler2)

const handler3=(evt) => {
    console.log(evt)
    console.log("div was hovered")
};
box.addEventListener("mouseover", handler3)

//to remove an event
box.removeEventListener("dblclick", handler1)