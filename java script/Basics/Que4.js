//print all even numbers from 0 to 100.
let n=0;
while(n<=100)
{
    if(n%2===0)
    {
        console.log(n);
    }
    n++;
}

//create a game where you start with any random game number.Ask the user to keep huessing the game number until the user enters correct value.
let num=prompt("Enter number between 1-10: ");
while(num!=8)
{
    num=prompt("You entered wrong number, guess again: ");
}
console.log("Congratulations, you entered a right number.");