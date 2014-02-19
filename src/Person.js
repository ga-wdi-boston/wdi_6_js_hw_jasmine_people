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
