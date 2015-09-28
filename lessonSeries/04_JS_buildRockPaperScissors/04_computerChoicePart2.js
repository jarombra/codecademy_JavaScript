var userChoice = prompt("Let's play! Do you choose Rock, Paper or Scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice <= 0.33) {
    (computerChoice = "Rock");

} else if (computerChoice <= 0.66) {
    (computerChoice = "Paper");

} else {
    (computerChoice = "Scissors");
}