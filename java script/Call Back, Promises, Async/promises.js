//promises: used to handel callback hell

//1
/*
let promise = new Promise((resolve, reject)=>{
    console.log("I am a promise")
    // resolve("accepted")
    reject("rejected")
});
*/

//2
/*
function getdata(dataid, nextData)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data: "+dataid)
            resolve("Success")
            if(nextData)
            {
                nextData()
            }
        }, 5000)
    })
}
*/

//3
const getPromise=()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am a Promise")
        // resolve("success")
        reject("error occured")
    })
}

let promise = getPromise();

//if resolve
promise.then((res)=>{  
    console.log("promise fulfilled", res)
})
//if reject
promise.catch((err)=>{
    console.log("Rejected", err)
})