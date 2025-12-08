let btn = document.querySelector("#btn")
console.log(btn)
let body = document.querySelector("body")

let mode = "light";
const handler = () =>{    
    if(mode==="light")
    {
        body.style.backgroundColor="black";
        btn.style.backgroundColor="grey";
        btn.style.color="white"
        mode="dark"
    }
    else{
        body.style.backgroundColor="white";
        btn.style.backgroundColor="white";
        btn.style.color="black"
        mode="light";
    }
    
}

btn.addEventListener("click", handler)




