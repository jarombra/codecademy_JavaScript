var friends = {};
    friends.bill = {
        firstName: "Bill",
        lastName: "Gates",
        number: "(245) 245 2524",
        address: ['Somehwere on Lake Washington']
        };
    friends.steve = {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(252) 345 2352",
        address: ['Six feet under']
        };
        
var list = function(parameter) {
for (var key in parameter) {
        console.log(key);
    }
};
list(friends);