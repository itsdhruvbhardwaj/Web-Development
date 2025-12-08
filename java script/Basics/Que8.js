/*create an array to store ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
a) remove the first company from the array
b)remove Uber& Add Ola in its place
c)Add Amazon at the end*/

let arr=["Bloomberg","Microsoft","Google","IBM","Netflix","Uber"];
//a
arr.shift();
console.log(arr);

//b
let index=arr.indexOf("Uber");
arr.splice(index,1,"Ola");
console.log(arr);

//c
let arr2=arr.concat("Amazon");
console.log(arr2);

//c
arr.splice(5,0,"Amazon");
console.log(arr);

