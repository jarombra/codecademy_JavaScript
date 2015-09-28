confirm("Let's play a game!");

var userChoice = prompt("Rock, Paper or Scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "Paper";
} else {
	computerChoice = "Scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) 
{
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
else if (choice1 === "Rock", "rock") 
    {
        if (choice2 === "Scissors") {
            return "Rock wins!";
    }
    else {
        return "Paper wins!";
        }
    }
    else if (choice1 === "Paper", "paper")
    {
        if (choice2 === "Rock") {
            return "Paper wins!";
        }
        else {
            return "Scissors win!";
        }
    }
    else if (choice1 === "Scissors", "scissors", "Scissor", "scissor")
    {
        if (choice2 === "Rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors win!";
        }
    }
}
compare(userChoice, computerChoice);