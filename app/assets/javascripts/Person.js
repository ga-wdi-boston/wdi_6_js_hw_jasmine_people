var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * 50 + 149);
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function(){ return this.firstName + " " + this.lastName; },
  stoneWeight: function(){ return this.weight / 6.35; }
};

