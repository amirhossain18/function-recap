var friends =['amir', 'rahim', 'faysal' , 'habib']
// console.log(friends);

var newFriends=['hamza', 'rakib', 'suumom']

var allFriends= newFriends.concat(friends);
console.log(allFriends);
var numberOfFriends= allFriends.length;
// console.log(numberOfFriends);

var partial = allFriends.splice(2,2);

console.log(partial);


