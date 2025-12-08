//Conditional Statements:
let age = 15;
if(age>18)
{
    console.log("You can vote ");
}
if(age<18)
{
    console.log("You can not vote ");
}

let mode="Light";
let color;

//01 if-if 
if(mode==="Dark")
{
    color="black";
}
if(mode==="Light")
{
    color="white";
}
console.log(color);


//02 if-else
if(mode==="Dark")
{
    color="black";
}
else
{
    color="white";
}
console.log(color);

//02
let num=10;
if(num%2 === 0)
{
    console.log("Is even");
}
else 
{
    console.log("Is odd");
}

//03 if-elseif
age=20;
if(age<18)
{
    console.log("junior");
}
else if(age>18)
{
    console.log("senior");
}
else
{
    console.log("adult")
}

