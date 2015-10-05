confirm("♬♩♪♫ PREPARE FOR BATTLE! ♬♩♪♫");

var slaying = true;
var youHit = Math.floor(Math.random()* 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit) {
        console.log("9,999,999 Damage!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("VICTORY!");
            slaying = false;
        } else {
            youhit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Miss!");
    slaying = false;
    }
}