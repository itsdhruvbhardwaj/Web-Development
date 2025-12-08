//For loop:
for(let i=1;i<=5;i++)
{
    console.log("Dhruv Sharma");
}

//while loop
let i=1;
while(i<=5)
{
    console.log("i=",i);
    i++;
}

//do while loop ye at least ek bar to run krega
i=20;
do
{
    console.log("i=",i);
    i++
}
while(i<=5);

//
i=1;
do
{
    console.log("i=",i);
    i++
}
while(i<=5);

//for-of loops: will print value at i
let str="Dhruv Sharma";
for(let i of str) //iterator 
{
    console.log("i=",i);
}

//to calculate length of string
str="Dhruv Sharma";
let size=0;
for(let i of str) //iterator 
{
    size++;
}
console.log("size is: ",size);

//for-in loop: will print i or index
let student={name:"Dhruv Sharma",age:20,cgpa:8.9,ispass:true};
for(let i in student)
{
    console.log("key=",i,"value=",student[i]);
}