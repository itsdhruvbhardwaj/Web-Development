// class Toyota{
//     start()
//     {
//         console.log("start")
//     }
//     stop()
//     {
//         console.log("stop")
//     }
//     setBrand(brand)
//     {
//         this.brandName=brand;
//     }
// }
 
// let fortuner = new Toyota() //creating object 
// fortuner.setBrand("Fortuner")

// let lexus = new Toyota()


//can also be done using constructor:
class Toyota{
    constructor(brand, year)
    {
        this.BrandName=brand;
        this.Year=year;
    }
    start()
    {
        console.log("start")
    }
    stop()
    {
        console.log("stop")
    }
}
 
let fortuner = new Toyota("Fortuner", 2000) //creating object 
console.log(fortuner)
let lexus = new Toyota("lexus", 2005)
console.log(lexus)