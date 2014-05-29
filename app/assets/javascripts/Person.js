var Person = function (firstName, lastName, ageinYears, weightinKilograms, heightinCentimeters, friends) {
	this.firstName = firstName; 
	this.lastName = lastName;
	if (typeof ageinYears !== undefined) {
		ageinYears = 30; 
	}
	if (typeof weightinKilograms !== undefined) {
		weightinKilograms = 80; 
	}
	if (typeof heightinCentimeters !== undefined) {
		heightinCentimeters = (Math.floor(Math.random() * 50) + 150); 
	}
	if (typeof friends !== undefined) {
		friends = [ ]; 
		// friends = ["Ironman", "Pinky", "The Brain", "Sheldon Cooper"][Math.floor(Math.random() * 4)]; 
	}
}; 




		