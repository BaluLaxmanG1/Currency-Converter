


const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");
// for (code in countryList){
//     console.log(code,countryList[code]);
// }
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }/*here event listener triggers when ever a change occurs
    so it will generate a argument and pass it to the function after 
    comma and that evt  */
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    console.log(element);
    let currCode = element.value;
    console.log(currCode);//INR USD 
    let countryCode = countryList[currCode];//IN US
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", async (evt) => {
    /* prevent default will skip all the default things of  a form
    like refreshing the page after submit etc. */
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amVal = amount.value;
    console.log(amVal);
    if (amVal === "" || amVal < 1) {
        amVal = 1;
        amount.value = "1";
    }
    const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    console.log(fromCurr.value, "----->", toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    //console.log(URL);
    let response = await fetch(URL);
    console.log(response, 1);
    let data = await response.json();
    console.log(data, 2);
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate, 3);

    let finalAmount = amVal * rate;
    msg.innerText = `${amVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});

