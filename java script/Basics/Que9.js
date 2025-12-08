//WAP to return the number vowels in a word using functions:
function countvowel(str)
{
    str = str.toLowerCase();
    let count=0;
    for(let i of str)
    {
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u")
        {
            count++;
        }
    }
    console.log(count);
}
countvowel("DhrUv");

//Using arrow function:
const countvow = (str) => {
    str = str.toLowerCase();
    let count=0;
    for(let i of str)
    {
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u")
        {
            count++;
        }
    }
    // return count;
    console.log(count);
}
countvow("aie");