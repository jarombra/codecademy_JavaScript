var user = prompt("Do you want a sandwich? We got PB&J, Turkey Club, Caprese, and Meatloaf.").toUpperCase();

switch(user) {
    case 'PB&J':
        var allergy = prompt("Do you have a nut allergy?").toUpperCase();
        var jam = prompt("Do you have a jellyergy?").toUpperCase();
        if(allergy === 'YES' || jam === 'YES') {
            console.log("Oh, good thing you told me, here, just have some bread.")
        } else {
            console.log("Cool.");
        }
        break;
    case 'TURKEY CLUB':
        var documentary = prompt("Have you seen that documentary about living with wild turkeys?").toUpperCase();
        var pigs = prompt("How about that documentary about the pork slaughter houses?").toUpperCase();
        if (documentary === 'YES' && pigs === 'YES') {
            console.log("Well then, you know what you're eating.")
        } else {
            console.log("It's for the best, here ya go!")
        }
        break;
    case 'CAPRESE':
        var tomato = prompt("Tomatoes?").toUpperCase();
        var cheese = prompt("You want mozzarella?").toUpperCase();
        if (tomato !== 'YES' && cheese !== 'YES') {
            console.log("You should try another sandwich then.")
        } else {
            console.log("That's pretty much all there is to it.")
        }
        break;
    case 'MEATLOAF':
        console.log("Sticks to your ribs, eh!");
        break;
    default:
        console.log("I JUST ran out of that kind, sorry.");
}