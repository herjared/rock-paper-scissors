

/** create event listener for all buttons that plays a round on click with the class of
 * the button that was clicked and the result of the computer play function */
 const btn = document.querySelectorAll("button");
 btn.forEach(buttons=>buttons.addEventListener('click',()=>game(buttons.className)));

 /**Create value for divs on page so that they can be targeted and changed within
  * any functions */
 const round = document.querySelector('.round');
 const score = document.querySelector('.score');
 const endResult =document.querySelector('.endResult');

/**Initialize scores for player and computer on page load up. Only done once so
 * that scores aren't reset after each round  */
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
        round.textContent = `It's a tie! ${player} ties ${computer}`;
        return 2;
    }else if (player ==="rock" && computer === "scissors"){
        round.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else if(player === "scissors" && computer === "paper"){
        round.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else if(player === "paper" && computer === "rock"){
        round.textContent=`You WIN this round! ${player} beats ${computer}`;
        return 1;
    }else {
        round.textContent=`You LOSE this round! ${computer} beats ${player}`;
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

/** Display score and game results if a player reaches 5. Reset score after a
 * winner is reached */
function checkScore(playerTotal,ComputerTotal){
    endResult.textContent = '';
    score.textContent = `Player Score : ${playerTotal} Computer Score : ${ComputerTotal}`;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore>computerScore){
            score.textContent = '';
            endResult.textContent="You WIN the GAME."
        } else{
            endResult.textContent="You LOST the GAME. Try better next time."
            score.textContent = '';

        }
        playerScore = 0;
        computerScore= 0;
    }
}