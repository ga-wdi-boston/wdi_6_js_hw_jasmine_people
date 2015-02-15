var Person = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * (200 - 150 + 1)) + 150;
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function() {
    return (this.weight * 0.157473) + ' stone';
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  },
  removeFriend: function(friendName) {
    this.friends.forEach(function(friend){
      if (friend.firstName === friendName) {
        this.friends.pop(friend);
      } else {
        return 'Friend not found.';
      }
    });
  },
  greetPeople: function(people, greeting) {
    var toGreet = people || this.friends;
    var salutation = greeting || 'Hi ';
    var greetString = '';
    toGreet.forEach(function(person){
      greetString = greetString + person.fullName() + ', ';
    });
    return salutation + greetString;
  }
};

me = new Person('Max', 'Kohl', 25, 95, 188);
chase = new Person('Chase', 'Bronstein', 29);
elise = new Person('Elise', 'Ramsay', 26);
