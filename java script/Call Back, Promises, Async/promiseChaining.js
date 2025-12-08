//chaining of promises
function asyncFunc() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data")
            resolve("resolved")
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data 2")
            resolve("resolved")
        }, 4000)
    })
}

//now data will given one after another
console.log("Fetching data 1...")
let p1 = asyncFunc();
p1.then((res)=>{
    // console.log(res)
    console.log("Fetching data 2...")
    let p2 = asyncFunc2();
    p1.then((res)=>{
        // console.log(res)
    })
})

p1.catch((err)=>{
    console.log(err)
})





