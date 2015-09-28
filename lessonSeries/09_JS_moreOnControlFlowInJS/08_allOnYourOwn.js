var answer = prompt("What kind of socks do you wear?");

switch(answer) {
    case 'Full':
        console.log("The usual.");
        break;
    case 'Athletic':
        console.log("Keeps ya fast!");
        break;
    case 'Knickers':
        console.log("Oh.");
        break;
    case 'Invisible':
        console.log("Stylish!");
        break;
    default:
        console.log("I haven't seen those socks before.");
}