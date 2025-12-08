//Filter out the marks of students who scored more than 90.
let marks = [80,90,94,85,92,74];
let ans = marks.filter(function(val)
{
    return val>90;
});
console.log(ans);

/*Take a number(n) as a input from the user and print the array from 1 to n. 
b. Use reduce method to calculate sum and product of all numbers in the array.*/
let arr=[];
let n= prompt("enter a number");
for(let i=0;i<n;i++)
{
    arr[i]=i+1;
}
console.log(arr);

//b
let result = arr.reduce(function(prev,next)
{
    return prev+next;
});
console.log("Sum is: ",result);

let result1 = arr.reduce(function(prev,next)
{
    return prev*next;
});
console.log("Product is: ",result1);