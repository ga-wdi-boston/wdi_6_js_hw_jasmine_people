function Person(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * 50 + 150 );
  this.friends = friends || [];
}

Person.prototype = {
  fullName: function(){ return this.firstName + ' ' + this.lastName; },
  weightInStone: function(){ return this.weight * 0.157473; },
  addFriend: function(friend) { this.friends.push(friend); },
  removeFriend: function(friend) { for(var i = 0; i < this.friends.length, i++;) {
                                  if(this.friends[i].fullName === friend) {
                                    this.friends.splice(i, 1);
                                   }}
                                 },

  // greetPeople: function() { for(var i = 0; i < this.friends.length, i++;) {
                              // return 'Hi, ' + i.fullName; } }
};

// for(var i = 0; i < this.friends.length, i++;) {
//   if(this.friends[i].fullName === friend) {
//     this.friends.splice(i, 1);
//   }
// }
