var Player = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = Math.floor(Math.random() * 50 + 150);
  this.friends = [];
};
