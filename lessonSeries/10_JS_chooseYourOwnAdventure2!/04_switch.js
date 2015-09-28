var user = prompt("Do you want a 'PB&J' a 'Turkey Club' a 'Caprese' or a 'Meatloaf' sandwich?").toUpperCase();

switch(user) {
    case 'PB&J':
        console.log("Gotta feed your inner toddler.");
        break;
    case 'Turkey Club':
        console.log("Sure.");
        break;
    case 'Caprese':
        console.log("Light and fresh!");
        break;
    case 'Meatloaf':
        console.log("Sticks to your ribs, eh!");
        break;
    default:
        console.log("I JUST ran out of that kind, sorry.");
}