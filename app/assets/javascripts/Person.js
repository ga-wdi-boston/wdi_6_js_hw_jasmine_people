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
  addFriend: function(friend) { this.friends.push(friend); }
};
