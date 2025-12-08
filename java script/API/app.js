const URL = "https://fake-json-api.mock.beeceptor.com/companies";

const para = document.querySelector("#para");
const details = document.querySelector("#btn")

//using async and await:
/*
const getfacts  = async()=>{
    // let promise = await fetch(URL);
    // console.log(promise)

    console.log("getting data...")
    let response = await fetch(URL); //promise
    console.log(response) //JSON Format and this is called AJAJ instead of AJAX

    let data = await response.json();  //2nd promise
    // console.log(data);
    para.innerHTML=data[1].name;
};
*/

//using promise chaining:

function getfacts(){                        //get facts function bnaya
    fetch(URL)                              //Uske andr URL call kia
    .then((response)=> {                    //fetched data to response mai dala
        return response.json();             //use JSON format mai convert kia to make it readable
    })
    .then((data)=>{                         //then uss readble data to call kia
        console.log(data);
        para.innerHTML = data[1].name;
    })
}

details.addEventListener("click", getfacts);
