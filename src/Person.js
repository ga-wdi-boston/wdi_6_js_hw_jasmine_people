var Person = function(firstName, lastName, options){
	options = options || {};
	// initializer goes here
	if (arguments.length < 2) {
		throw new Error("Persons must have first name and last name");
	}
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = options.age || Math.floor(Math.random()*21+25);
	this.weight = options.weight || Math.floor(Math.random()*41+60);
	this.height = options.height || Math.floor(Math.random()*51+150);
	this.friends = options.friends || [];
}

Person.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
};

Person.prototype.weightInStone = function() {
	return this.weight * 0.157473;
};

Person.prototype.addFriend = function(friend) {
	this.friends.push(friend);
};

Person.prototype.removeFriend = function(name) {
	var friendArray = this.friends
	for(i=0; i<friendArray.length; i++) {
		if (name === friendArray[i].firstName) {
			friendArray.splice(i, 1);
		}
	}
};

Person.prototype.greetPeople = function(options) {
	var everything = "",
	    options = options || {},
	    greeting = options.greeting || "Hi,",
	    peopleToGreet = options.people || this.friends;

	if (peopleToGreet.length === 0) {
		throw new Error("Must input people or have friends.");
	}

	for(var i = 0; i < peopleToGreet.length ; i++) {
		everything += greeting + " " + peopleToGreet[i].fullName() + "\n";
	}
	return everything;
};

