let mode = document.querySelector("#mode");
let body=document.querySelector("body")
let game=document.querySelector(".game")
let boxes=document.querySelectorAll(".box");

//to change theme
let theme="light";
const handler=()=>{
    if(theme==="light")
    {
        theme="dark";
        body.style.backgroundColor="#6b8989";
        game.style.backgroundColor="#098787";
        
        boxes.forEach((box)=>
        {
            box.style.backgroundColor="#7b7b45"; //
        });
        
    }
    else{
        theme="light";
        body.style.backgroundColor="#c5fafa";
        game.style.backgroundColor="aqua"
        
        boxes.forEach((box)=>
        {
            box.style.backgroundColor="#ffff4f";
        });
    }
}
mode.addEventListener("click", handler);


let reset=document.querySelector("#reset")
let turn = true; //true for O, false for X
const winningChances=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>
    {
        // console.log("clicked")
        if(turn)
        {
            box.innerText="O";
            box.style.color="white"
            turn=false;
        }
        else
        {
            box.innerText="X";
            box.style.color="black"
            turn=true;
        }
        box.disabled=true;

        checkWinner();
    
    });

}); 

//to check winning condition
checkWinner=()=>
{
    for(let winner of winningChances)
    {
        // console.log(winner[0],winner[1],winner[2]);

        let val1= boxes[winner[0]].innerText;
        let val2= boxes[winner[1]].innerText;
        let val3= boxes[winner[2]].innerText;

        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                console.log(val1);
                dispwinner(val1);
            }
        }
    }
}

//to display winner message
let msg=document.querySelector(".message");
dispwinner=(winner)=>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide")
    disableBoxes();
    
}
//to stop game after 1st winner
const disableBoxes=()=>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

//to reset or to start new game 
let newgameBtn=document.querySelector("#newgame");
let resetBtn=document.querySelector("#reset")
const resetgame=()=>
{
    turn =true;
    enableBoxes();
    msg.classList.add("hide");

}
const enableBoxes=()=>
{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
newgameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);