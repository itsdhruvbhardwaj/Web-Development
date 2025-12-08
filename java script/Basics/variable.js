//there was noe more keyword var but now we don't use it

let name="dhruv"; //this canot be redeclare but can update
const age=24; //this canot be redeclare or update
let price=99.9;
let x=null;
let y=undefined; 
let isFollow=false;
console.log(isFollow);
console.log(name);
console.log(age);
console.log(price);
name=25; //value can be updated 
console.log(name);

//block level scope:
{
    let a=10;
    console.log(a);
}
{
    let a=5;
    console.log(a);
}

//object
const student={fullname:"Dhruv Sharma", age:21,cgpa:7.6,isPass:true};
//to access objects using key:
console.log(student.age); 
//or
console.log(student["age"])

//to change the value of a key
student["age"]=student["age"]+1;
console.log(student["age"])

student["fullname"]="Mann Kumar";
console.log(student.fullname);