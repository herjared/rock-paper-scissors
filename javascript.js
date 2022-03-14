

/** create event listener for all buttons that plays a round on click with the class of
 * the button that was clicked and the result of the computer play function */
 const btn = document.querySelectorAll("button");
 btn.forEach(buttons=>buttons.addEventListener('click',()=>game(buttons.className)));

 /**Create value for divs on page so that they can be targeted and changed within
  * any functions */
 const results = document.querySelector('.results');
 const score = document.querySelector('.score');


let playerScore=0;
let computerScore=0;
/** This function make a move for the computer returning either
 * rock,paper,scissors as a string */
function computerPlay () {
    let number = Math.floor(Math.random() *3) +1;
    
    switch (number){
        case 1 :
            return "rock";
            
        case 2:
            return"paper";
            
        case 3:
            return "scissors";
            
        default:
            console.log("something is wrong");
    }
}
 /** This function asks player for a move until player inputs either rock paper
  * or scissors */
function playerPlay() {
        let x=0;
        while (x<1){
            let move = prompt("Enter rock or paper or scissors");
            let lowerCasedMove = "";
            lowerCasedMove = move.toLowerCase();
            if (lowerCasedMove === "rock"){
                x++;
                return "rock";
            } else if (lowerCasedMove === "paper") {
                x++;
                return "paper";
            }else if (lowerCasedMove === "scissors") {
                x++;
                return "scissors";
            }
        }
}
/** This function plays a round of Rock Paper Scissors with the computer and
 * user moves winner is sent to console. 1 is returned if player wins and 0 if
 * player loses. 2 is return if its a tie
*/
function playRound(player,computer){
    if (player === computer) {
        results.textContent = `It's a tie! ${player} ties ${computer}`;
        return 2;
    }else if (player ==="rock" && computer === "scissors"){
        results.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else if(player === "scissors" && computer === "paper"){
        results.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else if(player === "paper" && computer === "rock"){
        results.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else {
        results.textContent=`You LOSE this round! ${computer} beats ${player}`;
        return 0;
    }
}
/** This function plays five games of rock paper scissors and displays round
 * results and score and winner at the end */
function game(playerChoice){
    let computerChoice = computerPlay();
    let result = playRound(playerChoice,computerChoice);
    if (playerScore !== 5 && computerScore !== 5){
        if (result ===1){
            playerScore++;
            checkScore(playerScore,computerScore);
        }else if (result ===0){
            computerScore++;
            checkScore(playerScore,computerScore);
        }
    } else {
        checkScore();
    }
}

function checkScore(playerTotal,ComputerTotal){
    score.textContent = `Player Score : ${playerTotal} Computer Score : ${ComputerTotal}`;
    if (playerScore === 5 || playerScore === 5){
        
    }
}