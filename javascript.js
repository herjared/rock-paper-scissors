
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

console.log(computerPlay());

