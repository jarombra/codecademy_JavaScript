var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
var groceries = [];
function add(item, price) {
    var position = groceries.length;
    groceries[position] = {
        item: item,
        price: price
    };
}

add("Eggs", 0.98);
add("Milk", 1.23);
add("Magazine", 4.99);
add("Chocolate", 0.45);

console.log("Thanks for purchasing " + groceries.length + " items.")

for (var g = 0; g < 4; g++) {
    console.log(groceries[g].price);
    cashRegister.add(groceries[g].price);
}

//Show the total bill
console.log('Your bill is '+cashRegister.total);