let total=0;

const amt=document.querySelector("#amount");
const expense=document.querySelector("#name");
const btn=document.querySelector(".enter-cont button");
const List=document.querySelector("#list");
const totalText=document.querySelector("#total");

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amtVal=Number(amt.value);
    let list=document.createElement("li");
    let text=document.createElement("span");
    text.innerText=`${expense.value} - $${amtVal}`;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.addEventListener("click",()=>{
        total-=amtVal;
        totalText.innerText="Total:$"+total;
        list.remove();
    })
    list.append(text);
    list.append(delBtn);
    List.append(list);
    total+=Number(amtVal);
    totalText.innerText="Total:$"+total;
    amt.value="";
    expense.value="";
})