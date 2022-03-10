
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

function playGame(player,computer){
    if 
}