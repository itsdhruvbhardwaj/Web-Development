let choices=document.querySelectorAll(".choice");

let userCount=document.querySelector("#user")
let compCount=document.querySelector("#comp")

let userScore=0;
let compScore=0;

// choices.forEach((choice) => {
//     choice.addEventListener("click", ()=>
//     {
//         const choiceId=choice.getAttribute("id");
//         console.log(choiceId,"clicked");
//     });
// });

//to track which option user has choose:
for (let choice of choices) {
    choice.addEventListener("click", (event) => 
    {
        const userChoice = choice.getAttribute("id");  //rock, paper, scissor
        // console.log(userChoice, "clicked");
        playGame(userChoice)
    });
}

let message=document.querySelector("#message");
//main logic
const playGame=(userChoice)=>{
    console.log(userChoice, "clicked");

    //generate computer's choice:
    genCompChoice(userChoice);
}


const genCompChoice=(userChoice)=>{
    let options=["rock", "paper", "scissor"];
    let index=Math.floor(Math.random()*3);

    if(userChoice===options[index])
    {
        message.innerText="Match is Draw"
    }
    else if((userChoice==="rock" && options[index]==="paper") || (userChoice==="paper" && options[index]==="scissor") || (userChoice==="scissor" && options[index]==="rock"))
    {
        compScore++;
        compCount.innerText=compScore;
        message.innerText=`Comp Won, chose ${options[index]}`
    }
    else 
    {
        userScore++;
        userCount.innerText=userScore;
        message.innerText="You Won"
    }
}
// userCount.innerText=userScore;
// compCount.innerText=compScore;
