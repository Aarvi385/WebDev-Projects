let start=document.querySelector("#front-page button");
let questionBox=document.querySelector("#question h2");
let option=document.querySelectorAll(".option-text");
let submit=document.querySelector("#submit");
let scoreText=document.querySelector("#resultDiv p");
let tryAgain=document.querySelector("#resultDiv button");
let resultDiv=document.querySelector("#resultDiv");
let quizDiv=document.querySelector("#quiz");
let startDiv=document.querySelector("#front-page");



let currQuestion=0;
let scoreNum=0;
const question=[
    {
        question:"Who is the first president of India?",
        option:["Mr.Narendra Modi","Dr.Rajendra Prasad","Mrs.Draupadi Murmu","Pandit Jawahar Lal Nehru"],
        answer:"Dr.Rajendra Prasad"
    },
     {
        question:"Who is the first prime minister of India?",
        option:["Mr.Narendra Modi","Dr.Rajendra Prasad","Pandit Jawahar Lal Nehru","Mrs.Draupadi Murmu"],
        answer:"Pandit Jawahar Lal Nehru"
    },
     {
        question:"How many states are there in India?",
        option:["90","27","28","23"],
        answer:"28"
    },
     {
        question:"Who was the first person to step on moon?",
        option:["Bhaumik Maikhuri","Kalpana Chawala","Neil Armstrong","Rakesh sharma"],
        answer:"Neil Armstrong"
    }
];
function showQues(){
    document.querySelectorAll('input[name="answer"]:checked').forEach(r=>{
        r.checked=false;
    })
    let ques=question[currQuestion];
    questionBox.innerText=ques.question;
    option.forEach((opt,index)=>{
        opt.innerText=ques.option[index];
    })
}
function showResult(){
   quizDiv.classList.add("hidden");
   resultDiv.classList.remove("hidden");
   console.log(scoreText);
    scoreText.innerText=`Score:${scoreNum}`;
}
submit.addEventListener("click",()=>{
    let selected=document.querySelector('input[name="answer"]:checked');
    if(selected.nextElementSibling.innerText===question[currQuestion].answer){
            scoreNum++
        }
        currQuestion++;
     if(currQuestion<question.length){
            showQues();
        }
        else{
            showResult();
        }
})
tryAgain.addEventListener("click",()=>{
    currQuestion=0;
    score=0;
    quizDiv.classList.remove("hidden");
   resultDiv.classList.add("hidden");
   showQues()
});


start.addEventListener("click",()=>{
    currQuestion=0;
    score=0;

   startDiv.classList.add("hidden");
   quizDiv.classList.remove("hidden");

showQues()

});