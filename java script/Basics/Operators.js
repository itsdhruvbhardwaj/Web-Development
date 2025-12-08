console.log("Hellow");
// Single line comment

/*this is a multiple
line comment*/

//operators in js:
//Arithmatic operator:
let a=5;
let b=2;
console.log("a=",a,"& b=",b);
console.log("a+b = ",a+b); 
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a^b = ",a**b);

//Unary operator:
let c=1;
console.log("c = ",c);
c++;
console.log("c after c++ = ",c);
console.log("a = ",a);
console.log("a++ ",a++); //first print then increase
console.log("++a ",++a); //first increase then print

console.log("b = ",b);
console.log("b--",b--);
console.log("--b",--b);

//Assignment operator:
// '=','+=','-=','*=','**='
b+=1;
console.log("b += 1 ",b);

//Comparison Operator:
console.log("a==b ",a==b);
console.log("a!=b ",a!=b);
console.log("a<=b ",a<=b);
console.log("a>=b ",a>=b);

a=5;
b="5" //string -> number
console.log("a==b",a==b)

// to solve this problem we use strict verson
console.log("a===b",a===b);
console.log("a!==b ",a!==b);

//Logical operator:
a=6;
b=5;
let con1= a>b;
let con2= a===5;
console.log("con1 && con2",con1 && con2);
console.log("con1 || con2",con1 || con2);
console.log("!con2",!con2);

//ternary operator 
//condition ? true output:false output;

let age=25;
let result= age>=18 ? "Adult" : "Not Adult";
console.log(result);

//to study more visit MDN Docs