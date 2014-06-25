var Person = function(firstName, lastName, options){
  options = options || {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = options.age || 30;
  this.weight = options.weight || 80;
  this.height = options.height || Math.floor(Math.random() * 50 + 150);
  this.friends = options.friends || [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function(){
    return this.weight / 6.35;
  },
  addFriend: function(person){
    return this.friends.push(person);
  },
  removeFriend: function(removeName){
    for(var i = 0; i < this.friends.length; i++){
      while(this.friends[i].fullName === removeName){
        this.friends.splice(i, 1);
      }
    }
  },
  greetPeople: function(people){
    var array = people || this.friends;
    var greeting = ''

    if(array.length === 0){
      throw new Error('No people/friends to greet!');
    }
    else{
      for(var i = 0; i < array.length; i++){
        greeting = 'Hi, ' + array[i].fullName();
      }
      return greeting;
    }
  }
};
