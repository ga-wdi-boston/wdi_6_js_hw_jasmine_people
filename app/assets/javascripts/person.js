var Person = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * (200-150+1) + 150);
  this.friends = friends || [];
};

Person.prototype.fullName = function(firstName, lastName) {
  return this.firstName + " " + this.lastName;
};

Person.prototype.weightInStone = function(weight) {
  return this.weight * 0.157473;
};

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
  return this.friends;
};

Person.prototype.removeFriend = function(friend) {
  for(var i = 0; i < this.friends.length; i++) {
    if(this.friends[i].firstName === friend)
      this.friends.splice(this.friends[i]);
    return this.friends;
  }
};

Person.prototype.greetPeople = function(people, greeting) {
  this.people = people || this.friends;
  this.greeting = greeting || 'Hi';
  var shoutout = this.greeting;

  this.people.forEach(function(person) {
    console.log(shoutout + " " + person.fullName());
  });
};

var diarmuid = new Person('diarmuid', 'mcgann');
var rafa = new Person('rafa', 'nadal');
var pat = new Person('Pat', 'clark', 25, 65, 175, [diarmuid, rafa]);
