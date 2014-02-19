var Person = function (firstName, lastName, options) {
  if(lastName === undefined){
    throw new Error("A valid person must have a first and last name.");
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = Math.floor(Math.random() * (45 - 24 + 1) + 24);
  this.weight = Math.floor(Math.random() * (99 - 60 + 1) + 60);
  this.height = Math.floor(Math.random() * (199 - 150 + 1) + 150);
  // set default attributes
  if(options !== undefined){
    for (var p in options) {
      this[p] = options[p];
    }
  }
  this.friends = []
};

// Common behavior inside a prototype
Person.prototype = {
  fullName      : function() {
    return this.firstName + " " + this.lastName;
  },
  weightInStone : function() {
    return parseFloat((this.weight / 6.35029).toFixed(4));
  },
  addFriend     : function(person) {
    this.friends.push(person);
  },
  removeFriend  : function(firstName) {
    var newFriends = [];
    this.friends.filter(function(element){
      if (element.firstName !== firstName ) {
        newFriends.push(element);
      }
    });
    this.friends = newFriends;
  },
  greetPeople   : function(options) {
    var greeting = "";
    if ( options === undefined ) {
      this.friends.forEach(function(el) {
        greeting = greeting + "Hi " + el.firstName + ".";
      });
    } else{
      options.people.forEach(function(el) {
        greeting = greeting + " " + options.greeting + " "+ el.firstName + ".";
      });
    }
    return greeting;
  }
}
