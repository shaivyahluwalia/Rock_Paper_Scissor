const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScore=0;
let compScore=0;
const showWin=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You WIN! Your ${userChoice} beats computer's ${compChoice}`;
     }
     else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose :(");
        msg.innerText=`You LOSE :(  Computer's ${compChoice} beats your ${userChoice}`;
     }
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw! PLAY AGAIN";
}
const genCompChoice=()=>{
    let option=["Rock","Paper","Scissor "];
    const radIdx=Math.floor(Math.random()*3);
    return option[radIdx];
}
const playGame=(userChoice)=>{
    console.log("user choice is",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is",compChoice);
    if(userChoice === compChoice){
    //draw
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="Rock"){
        userWin=compChoice==="Paper"?false:true;
    }else if(userChoice==="Paper"){
        userWin=compChoice==="Scissor"?false:true;
    }else{
        userWin=compChoice==="Rock "?false:true;
    }
    showWin(userWin,userChoice,compChoice);
}


}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       playGame(userChoice);
    });
});
