/*jshint multistr:true */

var text = "Duck duck duck duck duck duck \
duck Goose! duck duck duck...";

var myName = "Goose!";
var hits = [];

for (var i = 0; i < text.length; i++) 
if (text[i] === "G") {
    for (var j = i; j < (myName.length + i); j++) {
        hits.push(text[j]);
    }
}
if (hits.length === 0) {
    console.log("Goose was not found!");
} else {
    console.log(hits);
}