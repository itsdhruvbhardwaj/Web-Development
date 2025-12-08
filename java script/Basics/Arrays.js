//it is linear way to store data. it is mutable
let names=["Dhruv","Mann","Kunal","Garv"];
let marks=[2,5,7,8,9,3];
console.log(marks);
console.log(marks.length);

//array indices
console.log(names[3],marks[5]);

//loops in arrays:
for(let index=0;index<names.length;index++)
{
    console.log(names[index]);
}

//by using for-of loops:
for(let el of names)
{
    console.log(el);
}

//by using for in loop:
for(let el in names)
    {
        console.log(names[el]);
    }