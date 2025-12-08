//write a code which gives grade according to their score: 

let score=prompt("Enter Score: ");
if(score>=90)
{
    console.log("A");
}
else if(score>=70 && score<=89)
{
    console.log("B");
}
else if(score>=60 && score<=69)
{
    console.log("C");
}
else if(score>=50 && score<=59)
{
    console.log("D");
}
else
{
    console.log("F");
}