function api(dataid)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data "+dataid)
            resolve(200);
        }, 2000);
    })
}


/*
async function getWeatherData()
{
    await api(2); //1st
    await api(4); //2nd
    await api(7); //3nd
}
*/

//or: using IIFE(Intermediate Invoked Function Expression)

(async function()
{
    await api(2); //1st
    await api(4); //2nd
    await api(7); //3nd
})();