let choices = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let scoreOfUser = document.querySelector("#user-score");
let scoreOfComp = document.querySelector("#comp-score");

const compChoice = ()=>{
    const compChoice = ["Rock", "Paper", "Scissor"];
    const idx = Math.floor(Math.random()*3);
    return compChoice[idx];
}


const drawGame = ()=>{
    console.log("Game is Draw!");
    msg.innerText = "Game is Draw!";
    msgContainer.style.backgroundColor = "black";
}


const winner = (userWin, userChoice, computerChoice)=>{
    if(userWin){
        console.log(`You Won! Your ${userChoice} beats ${computerChoice}`);
        msg.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        userScore++;
        scoreOfUser.innerText = userScore;
        msgContainer.style.backgroundColor = "green";

    }else{
        console.log(`You lose! ${computerChoice} beats Your ${userChoice}`);
        msg.innerText = `You lose! ${computerChoice} beats Your ${userChoice}`;
        compScore++;
        scoreOfComp.innerText = compScore;
        msgContainer.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log(`User choice = ${userChoice}`);
    let computerChoice = compChoice();
    console.log(`Computer choice = ${computerChoice}`);

    if(userChoice===computerChoice){
        drawGame();
    }else{
        userWin = true;
        if(userChoice==="Rock"){
            userWin = computerChoice === "Paper" ? false : true;
        }else if(userChoice==="Paper"){
            userWin = computerChoice === "Scissors" ? false : true;
        }else{
            userWin = computerChoice === "Paper" ? true : false;
        }
        winner(userWin, userChoice, computerChoice);
    }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})