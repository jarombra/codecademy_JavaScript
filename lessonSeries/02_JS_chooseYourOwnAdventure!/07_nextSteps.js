// Age check:
confirm("Mike, is that you?");
var age = prompt("How old are you again?");
if (age <= 14) {
    console.log("You're too young for raunchy humor.");
} else {
    console.log("Ok, imagine you are a teenager again..."); }
// The story:
    console.log("You are at a soccer camp, and you hear someone shout 'GET OFF ME OR I'LL GIVE YOU A BLOWJOB!'");
    console.log("You feel compelled to invervene, but you're far away and all you have is a soccer ball");
var userAnswer = prompt("Do you kick the ball at the quarrel? (yes / no)");
// Boolean:
if (userAnswer === "yes") {
    console.log("Both campers now threaten you in the same manner.");
} else {
    console.log("Good choice, better to stay out of it."); }
// Get some feedback:
var feedback = prompt("On a scale of 1-10, how funny was this situation?");
if (feedback >= 8) {
    console.log("Definitely a classic tale!");
} else {
    console.log("Yeah, perhaps it is better left to the annals of summertime lore.");
}