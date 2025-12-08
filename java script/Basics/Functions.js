function myfun()
{
    console.log("Dhruv Sharma")
}
myfun();

//function with parameter
function myfun2(a)
{
    console.log(a);
}
myfun2("Dhruv Bhardwaj")

//function to calculate sum:
function sum(a,b)
{
    console.log("Sum is: "+(a+b));
}
sum(5,5);
sum(1,8);

//return keyword:
function sum2(a,b)
{
    s=a+b;
    return s;
}
let val = sum2(5,5);
console.log(val);

//arrow functions in modern JS:
const mul = (a,b) => {
    console.log(a*b);
}
mul(4,4);

const mul2 = (a,b) => {
    return a*b;
}
mul(4,4);

//ForEach function/ higher order methods or functions:
let arr= ["Dhruv","Aman","Kannu"];

arr.forEach(function value(val)
{
    console.log(val);
});

//or

arr.forEach((val) => {
    console.log(val);
});

//map function:
console.log("Map function");

arr.map(function(val)
{
    console.log(val);
});

//can also store in new array:(use case)
let newarr=arr.map(function(val)
{
    return val;
});
console.log(newarr);

//filter method: 
//use to filter out values(use case)
arr=[1,2,4,5,6];
let evenval = arr.filter(function(val)
{
    return val%2===0;
});
console.log(evenval);

//reduce method:
//used to produce single value such as sum or average(use case):
arr=[1,2,4,5,6];
const ans =arr.reduce(function(Result,current)
{
    return Result+current;
});
console.log(ans);

//reduce method to get maximum number:
const max =arr.reduce(function(prev,next)
{
    return prev>next ? prev:next;
});
console.log(max);
