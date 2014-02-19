var Person = function (firstName, lastName, options) {
  if(lastName === undefined){
    throw new Error("A valid person must have a first and last name.");
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = Math.floor(Math.random() * (46 - 24 + 1) + 24);
  this.weight = Math.floor(Math.random() * (100 - 60 + 1) + 60);
  this.height = Math.floor(Math.random() * (200 - 150 + 1) + 150);
  // set default attributes
  if(options !== undefined){
    if(options.age !== undefined){
      this.age = options.age;
    }
    if(options.weight !== undefined){
      this.weight = options.weight;
    }
    if(options.height !== undefined){
      this.height = options.height;
    }
  }
  this.friends = []
};
