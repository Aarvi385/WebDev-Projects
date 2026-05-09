let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choices ");
const resultView=document.querySelector("#msg");
const userNum=document.querySelector("#user-score");
const compNum=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let choices=["rock","scissor","paper"];
    let idx=Math.floor(Math.random()*3);
    return choices[idx];
}
const draw=()=>{
    console.log("it a Draw");
    resultView.innerText=`It was a Draw!`;
    resultView.style.backgroundColor="rgb(248, 132, 132)";
    resultView.style.color="rgb(236, 7, 7)";
}

const userWon=(compChoice,userChoice)=>{
    userScore++;
    userNum.innerText=userScore;
    console.log("user won");
    resultView.innerText=`User Won! ${userChoice} beats ${compChoice}`;
    resultView.style.backgroundColor="rgb(142, 250, 142)";
    resultView.style.color="rgb(5, 160, 5)";
}
const compWon=(compChoice,userChoice)=>{
    compScore++;
    compNum.innerText=compScore;
    console.log(" comp won");
    resultView.innerText=`Computer Won!${compChoice} beats ${userChoice} `;
    resultView.style.backgroundColor="rgb(127, 127, 184)";
    resultView.style.color="rgb(13, 47, 141)";
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log("user choice=",userChoice,"compChoice=",compChoice);
    if(compChoice===userChoice){
        draw();
    }
    else{
        let userWin=true;
        if(compChoice==="rock"){
            (userChoice=="paper")?userWon(compChoice,userChoice):compWon(compChoice,userChoice);
            userWin=(userChoice=="paper")?true:false;
        }
        else if(compChoice==="paper"){
            (userChoice=="scissor")?userWon(compChoice,userChoice):compWon(compChoice,userChoice);
            userWin=(userChoice=="scissor")?true:false;
        }
        else{
            (userChoice=="rock")?userWon(compChoice,userChoice):compWon(compChoice,userChoice);
            userwin=(userChoice=="rock")?true:false;
        }
        
    }
   
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})