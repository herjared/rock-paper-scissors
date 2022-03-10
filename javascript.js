
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



let playerMove = playerPlay();
let computerMove = computerPlay();

function playRound(player,computer){
    if (player === computer) {
        return `It's a tie! ${player} ties ${computer}`;
    }else if (player ==="rock" && computer === "scissors"){
        return `You WIN! ${player} beats ${computer}`;
    }else if(player === "scissors" && computer === "paper"){
        return `You WIN! ${player} beats ${computer}`;
    }else if(player === "paper" && computer === "rock"){
        return `You WIN! ${player} beats ${computer}`;
    }else {
        return `You LOSE! ${computer} beats ${player}`;
    }
}
function game(){

}
console.log(playRound(playerMove,computerMove));