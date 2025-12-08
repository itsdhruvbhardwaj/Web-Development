//strings are immutable

let str="Dhruv Sharma";
console.log(str);

//to calculate length:
console.log(str.length);

//to access particular character:
console.log(str[4]);

//Template Literals
let specialstring= `This is a template literal`;
console.log(specialstring);

let obj={item:"Pen",price: 10};
console.log("The cost of",obj.item,"is",obj.price,"rupees.");
//or alternate way is:
let output=`The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

//escape character:
console.log("Dhruv\nSharma");
console.log("Dhruv\tSharma");

str="Dhruv\nSharma";
console.log(str.length);

//String methods/functions:
str="dhruv sharma";

//01
let newstr=str.toUpperCase();
console.log(newstr);
//02
let newstr2=newstr.toLowerCase();
console.log(newstr2);
//03
str="   Dhruv Sharma   "
str=str.trim()
console.log(str);
//04
str="012345678"; //str="Dhruv"
console.log(str.slice(1,4));
console.log(str.slice(2));
//05
let str1="Dhruv"
let str2="Sharma"
let res=str1.concat(str2); //res=str1+str2;
console.log(res);
//06
str="Dhruvv";
console.log(str.replace("v","b"));
console.log(str.replaceAll("v","b"));
//07
str="i love you";
console.log(str.charAt(2));
