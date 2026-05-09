let total=0;
const task=document.querySelector(".add-task input");
const btn=document.querySelector(".add-task button");
const taskList=document.querySelector(".task-list form ul");
const taskCount=document.querySelector(".task-count h3");

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    let text=document.createElement("span");
    text.innerText=task.value;
    let list=document.createElement("li");
    let delBtn=document.createElement("button");
     list.append(checkbox,text,delBtn);
     delBtn.innerHTML='<i class="fa-solid fa-delete-left"></i>';
    delBtn.addEventListener("click",()=>{
        list.remove();
        if(!checkbox.checked){
            total--;
             taskCount.innerText=`Task Left: ${total}`;
        }
    })
    function complete(){
        text.classList.toggle("completed");
        total--;
        taskCount.innerText=`Task Left: ${total}`;
    }
    taskList.append(list);
    checkbox.addEventListener("change",()=>{
        complete()
    })
    total++;
    taskCount.innerText=`Task Left: ${total}`;
    task.value="";
})