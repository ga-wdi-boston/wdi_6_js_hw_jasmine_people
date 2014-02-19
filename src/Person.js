function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function Person(first, last, age, weight, height, friends) {
	this.first_name = first;
	this.last_name = last;
	this.age = age || getRandomInt(25, 45);
	this.weight = weight || getRandomInt(60, 100);
	this.height = height || getRandomInt(150, 200);
	this.friends = friends || [];
};

Person.prototype.fullName = function() {
		return this.first_name + " " + this.last_name;
};

Person.prototype.weightInStone = function() {
	return (this.weight / 6.35);
};

Person.prototype.addFriend = function(new_person) {
	return this.friends.push(new_person);
};

Person.prototype.removeFriend = function(name_string) {
	for (i = 0, length = this.friends.length; i < length; i = i + 1) {
		if (this.friends[i].first_name === name_string){
			delete this.friends[i];
		};
		return this.friends;
	};
};
