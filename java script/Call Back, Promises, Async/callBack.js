function sum(a, b)
{
    console.log(a+b)
}
// function calculator(a, b, sum)
// {
//     sum(a,b)
// }
//or
function calculator(a, b, sumcallback)
{
    sumcallback(a,b)
}
calculator(2, 2, sum)

//2
function getdata(dataid)
{
    setTimeout(()=>{
        console.log("Data "+dataid) //gives data after 2sec
    }, 2000)
}
// getdata(1)
// getdata(2)

//3 gives delay between data 1 and 2, 3
function getdata(dataid, getnextdata)
{
    setTimeout(()=>{
        console.log("Data "+dataid) //gives data after 2sec
        if(getnextdata)
        {
            getnextdata()
        }
    }, 2000)
}

//callback Hell
getdata(1, ()=>{
    console.log("Getting data 2...")
    getdata(2, ()=>{
        console.log("Getting data 3...")
        getdata(3)
    }); 
});