var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * 50 + 150);
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  },
  weightInStone: function(){
    return this.weight / 6.35;
  },
  addFriend: function(person){
    this.friends.push(person);
  },
  removeFriend: function(removeName){
    for(var i = 0; i < this.friends.length; i++){
      if(this.friends[i].fullName === removeName){
        this.friends.splice(i, 1);
      }
    }
  }
};
