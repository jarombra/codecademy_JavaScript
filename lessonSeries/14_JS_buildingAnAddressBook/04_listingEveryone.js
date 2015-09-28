var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var rod = {
    firstName: "Rod",
    lastName: "Blemming",
    phoneNumber: "(650) 999-9999",
    email: "rod.blemming@example.com"
};


var contacts = [bob, mary, rod];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function () {
    var contactsLength = contacts.length
    for (var i = 0; i < contacts.length; i++) {
        printPerson(contacts[i]);
    }
}