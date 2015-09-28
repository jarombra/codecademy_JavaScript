// Age check:
confirm("Mike, is that you?");
var age = prompt("How old are you again?");
if (age <= 13) {
    console.log("Good, you are young enough to play");
} else {
    console.log("Ok, you are wise enough to play");
}
// The story:
    console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
    console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage? (yes / no)");
// Boolean:
if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
// Get some feedback:
var feedback = prompt("How much fun was this on a scale of 1-10?");
if (feedback >= 8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}