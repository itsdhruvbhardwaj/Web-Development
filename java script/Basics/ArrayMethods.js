let veggies=["potato","tomato","ladyfinger"];
console.log(veggies);

veggies.push("chips")  //adds at the end
console.log(veggies);

let deleted_item=veggies.pop(); //deletes from the end and can also store deleted item
console.log(veggies);
console.log(`deleted item is: ${deleted_item}`);

//to convert array into string:
console.log(veggies.toString());

let marks=[1,2,4,7,8,9,3];
console.log(marks.toString());

let students1=["mann","Dhruv","garv"];
let students2=["vikanshu","dipanshu"];

//concat:
let students = students1.concat(students2);
console.log(students);

//unshift:
students.unshift("kunal"); //add to first value
console.log(students);

//shift
students.shift(); //deleted first value and can be stored
console.log(students); 

//slice: immutable
veggies=["potato","tomato","ladyfinger","apple","wheat"];
console.log(veggies);
// let v=veggies.slice(1,3)
// console.log(v); 
console.log(veggies.slice(1,3)); 
console.log(veggies.slice(1));

//splice: mutable: splice(start,delcount,newelems)
let arr=[1,2,4,7,8,9,3];
console.log(arr);

arr.splice(2, 2, 101, 102);
console.log(arr);

//add element using splice
arr.splice(2, 0, 10, 20);
console.log(arr);

//delete element using splice
arr.splice(2, 4);
console.log(arr);

//replace element using splice
arr.splice(4,1,50 );
console.log(arr);