var Person = function (firstName, lastName, options) {
  if(lastName === undefined){
    throw new Error("A valid person must have a first and last name.");
  }
  this.firstName = firstName;
  this.lastName = lastName;
  // set default attributes
  this.age = Math.floor(Math.random() * (46 - 24 + 1) + 24);
  this.weight = Math.floor(Math.random() * (100 - 60 + 1) + 60);
  this.height = Math.floor(Math.random() * (200 - 150 + 1) + 150);
  this.friends = []
  // if ( options !== undefined ) {
  //   for ( prop in options ) {
  //     options.prop
  //   }
  // }
};
