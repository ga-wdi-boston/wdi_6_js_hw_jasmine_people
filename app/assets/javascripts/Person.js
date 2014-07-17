function Person(firstName, lastName, options) {
  this.firstName = firstName;
  this.lastName = lastName;
  options = options || {};
  this.age = options.age || 30;
  this.weight = options.weight || 80;
  this.height = options.height || Math.floor(Math.random() * 50 + 150);
  this.friends = options.friends || [];
}

Person.prototype = {
  fullName: function()  {
    return this.firstName + ' ' + this.lastName;
  },

  weightInStone: function() {
    return this.weight / 6.35;
  },

  addFriend: function(person) {
    return this.friends.push(person);
  },

  removeFriend: function(name) {
    for(var i = 0; i < this.friends.length; i++) {
      if(this.friends[i].fullName() === name) {
        return this.friends.splice(i, 1);
      }
    }
  },

  greetPeople: function(options) {
    options = options || {};
    people = options.people || this.friends;
    greeting = options.greeting || 'Hi';

    if(people.length === 0) {
      throw new Error('Nobody to greet!');
    } else {
      var greetings = '';
      people.forEach(function(friend){
        greetings += greeting + ', ' + friend.fullName() + '! ';
      });
      return greetings;
    }
  }
};
