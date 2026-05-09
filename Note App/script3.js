let noteArea=document.querySelector("#note-area");
let noteTitle=document.querySelector("#enter-note input");
let noteBox=document.querySelector("#enter-note textarea");
let btn=document.querySelector("#enter-note button");

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let div=document.createElement("div");
    let note=document.createElement("span");
    note.id="note";
    let h3=document.createElement("h3");
    let para=document.createElement("p");
    let delBtn=document.createElement("button");
    div.id="note-cont";
    h3.innerText=noteTitle.value;
    para.innerText=noteBox.value;
    delBtn.innerText="Delete";
    delBtn.addEventListener("click",()=>{
        div.remove();
    })
    note.append(h3,para);
    div.append(note,delBtn)
    console.log(div);
        noteArea.append(div);
    noteTitle.value="";
    noteBox.value="";
})