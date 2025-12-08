//For a given array with marks of students [85,97,44,37,76,60]. Find the average marks of the entire class.
let marks=[85,97,44,37,76,60]
len=marks.length;
let sum=0;
for(let mark of marks)
{
    sum=sum+mark;
}
let avg_marks=sum/len;
console.log(`average marks of class ${avg_marks}`);