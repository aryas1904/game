let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const body = document.querySelector("body");

const gencompchoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = [Math.floor(Math.random() * choices.length)];
    return choices[randomChoice];
}

const playgame = (userChoice) => {
    console.log("userchoice=", userChoice);
    const compchoice = gencompchoice();
    console.log("compchoice=", compchoice);
    if (userChoice === compchoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compchoice === "scissors") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
                else if (userChoice==="scissors"){
                    if (compchoice === "paper"){
                        userWin = true;
                        }
                        else {
                            userWin = false;

                }
            }
            else if(userChoice==="paper"){
                if(compchoice==="rock"){
                    userWin = true;
                    }
                    else {
                        userWin = false;
            }
        }
    showWinner(userWin);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
const drawgame = () => {
    console.log("game was draw");
    msg.innerText="Game was a draw. Play again!";
    msg.style.backgroundColor="rgb(176, 89, 96)";
};
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText = "You win!";
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText = "You lost";
        msg.style.backgroundColor="red";

    }
}
showWinner();

