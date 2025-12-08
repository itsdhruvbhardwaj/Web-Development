let btn = document.createElement("button")
btn.innerText="click me";

let div = document.querySelector("div");

div.append(btn);
div.prepend(btn)
div.before(btn)
div.after(btn)

div.remove()