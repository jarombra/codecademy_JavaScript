// Loop Syntax Exercises

// The For Loop:


for (var i = 1; i < 4; i++) {
    console.log("For loop thrice! " + i);
}

// The While Loop:


var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

// The Do/While Loop:


var condition = false;
do {
    console.log ("Loop once!");
}

while (condition);