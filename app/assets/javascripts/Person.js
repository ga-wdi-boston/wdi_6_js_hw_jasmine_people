var Person = function(firstName, lastName, ageinYears, weightinKilograms, heightinCentimeters, friends) {
	this.firstName = firstName; 
	this.lastName = lastName;
	if (typeof ageinYears === null ) {
		this.ageinYears = 30; 
	}
	if (typeof weightinKilograms === null ) {
		this.weightinKilograms = 80; 
	}
	if (typeof heightinCentimeters === null ) {
		this.heightinCentimeters = (Math.floor(Math.random() * 51) + 150); 
	}
	if (typeof friends === null ) {
		this.friends = [ ]; 
	}
}; 

// Person.prototype = {
// 	fullName: function() {
// 		return this.firstName + ' ' +  this.lastName;
// 	}
// };




		