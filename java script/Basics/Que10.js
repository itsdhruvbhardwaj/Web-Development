//WAP to get the square of every element using ForEach loop:

let arr=[1,2,3,4];
arr.forEach(function value(val)
{
    console.log(val*val);
});

//or using arrow function
arr.forEach((val)=>{
    console.log(val*val);
});

//or
let callback= (val) => {
    console.log(val*val)
}
arr.forEach(callback);