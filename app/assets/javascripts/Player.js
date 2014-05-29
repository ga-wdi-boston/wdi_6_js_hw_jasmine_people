var Player = function(firstName, lastName, age, weight, height, friends) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = Math.floor(Math.random() * 50 + 150);
  this.friends = [];
  this.fullName = function(firstName, lastName){ return firstName + ' ' + lastName;};
  this.weightInStone = function(weight){ return Math.round(weight / 14);};

  this.addFriend = function(buddy){
    this.friends.push(buddy);
  };
  this.removeFriend = function(nameToRemove){
    for(var i = 0; i < this.friends.length; i++) {
      if(this.friends[i].fullName === nameToRemove){
        this.friends.splice(i, 1);
      }
    }
  };
};
