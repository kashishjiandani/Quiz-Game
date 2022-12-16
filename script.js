const quizDB = [
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"Hyper Text Makeup Language",
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is React.Js?",
        a:"A Framework",
        b:"A Library",
        c:"A Language",
        d:"A Syntax",
        ans:"ans2"
    },
    {
        question:"Q3: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Console Style Sheets",
        c:"Copy Selector Sheets",
        d:"Cascading Style Selectors",
        ans:"ans1"
    },
    {
        question:"Q4: What is the full form of JS?",
        a:"JavaSyntax",
        b:"JavaSelector",
        c:"JavaScript",
        d:"JustScript",
        ans:"ans3"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer') //result of answers is an array

let questionCount=0;
let score=0;

const loadQuestion = ()=>{
    question.innerText=quizDB[questionCount].question;
    option1.innerText=quizDB[questionCount].a;
    option2.innerText=quizDB[questionCount].b;
    option3.innerText=quizDB[questionCount].c;
    option4.innerText=quizDB[questionCount].d;
}

loadQuestion();

const getCheckedAnswer=()=>{
    let answer;

    answers.forEach((curAnsElement)=>{
        if(curAnsElement.checked){
            answer=curAnsElement.id;
        }
    });
    return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElement)=>curAnsElement.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckedAnswer(); 
    console.log(checkedAnswer);

    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length}!
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
       
        showScore.classList.remove('scoreArea');
    }
});