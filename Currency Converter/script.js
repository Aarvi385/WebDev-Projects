const baseUrl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdown=document.querySelectorAll(".select-cont select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(" #from select");
const toCurr=document.querySelector("#to select");
const msg=document.querySelector(".msg2")


for(let select of dropdown){
    for(let currCode in countryList){
    let newOption=document.createElement("option");
    newOption.innerText=currCode;
    newOption.value=currCode;
    if(select.name==="from" && currCode==="USD"){
        newOption.selected="slected";
    } else if(select.name==="to" && currCode==="INR"){
        newOption.selected="slected";
    }
    select.append(newOption) ;   
}
select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
};

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
     image.src=newSrc;
};

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===" "||amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    // console.log(fromCurr.value);
    const URL=`${baseUrl}/${fromCurr.value.toLowerCase()}.json`
    let response= await fetch(URL);
    let data=await response.json();
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);
    let Amt= amtVal*rate;
    console.log(Amt);
    let finalAmt=Math.round(Amt);
    console.log(finalAmt);
   msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
})
function handleSize(){
    dropdown.forEach(el=>{
    if(window.innerWidth<990){
    el.classList.add("form-select");
    
}
else{
    el.classList.remove("form-select");
}
})
};

handleSize();
window.addEventListener("resize",handleSize);