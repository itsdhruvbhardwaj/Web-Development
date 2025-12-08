
const BASE_URL="https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button")

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");

for(let select of dropdowns)
{
    for(CurrCode in countryList)
    {
        // console.log(code, countryList[code]);
        let newOption = document.createElement("option");
        newOption.innerText = CurrCode;
        newOption.value = CurrCode;
        if(select.name === "From" && CurrCode === "USD")
        {
            newOption.selected="selected"
        }
        else if(select.name === "To" && CurrCode === "INR")
        {
            newOption.selected="selected"
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    } )
}

const updateFlag = (element) => {
    let CurrCode = element.value;
    let CounCode = countryList[CurrCode];
    let newsrc = `https://flagsapi.com/${CounCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;
    if(amtvalue === "" || amtvalue < 1)
    {
        amtvalue=1;
        amount.value="1";
    }
    
    const URL = `${BASE_URL}/${fromCurr.value}`;

    let response = await fetch(URL);
    let data = await response.json();
    
    let rate = data.rates[toCurr.value];
    // console.log(rate);

    let finalAmt = amtvalue * rate;

    msg.innerText = `${amtvalue} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`  //1 USD = 86 INR

})
