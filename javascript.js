
/** This function make a move for the computer returning either rock,paper,scissors as a string */
function computerPlay () {
    let number = Math.floor(Math.random() *3) +1;
    
    switch (number){
        case 1 :
            return "rock";
            break;
        case 2:
            return"paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            console.log("something is wrong");
    }
}
 /** This function asks player for a move until player inputs either rock paper or scissors */
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
/** This function plays a round of Rock Paper Scissors with the computer and user moves
 * winner is sent to console. 1 is returned if player wins and 0 if player loses. 2 is return if its a tie
*/
function playRound(player,computer){
    if (player === computer) {
        console.log(`It's a tie! ${player} ties ${computer}`);
        return 2;
    }else if (player ==="rock" && computer === "scissors"){
        console.log(`You WIN! ${player} beats ${computer}`);
        return 1;
    }else if(player === "scissors" && computer === "paper"){
        console.log(`You WIN! ${player} beats ${computer}`);
        return 1;
    }else if(player === "paper" && computer === "rock"){
        console.log(`You WIN! ${player} beats ${computer}`);
        return 1;
    }else {
        console.log(`You LOSE! ${computer} beats ${player}`);
        return 0;
    }
}
/** This function plays five games of rock paper scissors and displays round results and score */
function game(){
    let result = 2;
    let playerScore = 0;
    let computerScore =0;
    for(let i=0;i<5;i++){
        let playerMove = playerPlay();
        let computerMove = computerPlay();
        result = playRound(playerMove,computerMove);
        if (result === 0) {
            computerScore++;
        } else if(result ===1){
            playerScore++; 
        }
        console.log(`Score:   Player ${playerScore} Computer ${computerScore}`);
    }
}
game();