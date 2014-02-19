describe('Person', function(){
	var person, person2, person3, invalid_person;
	beforeEach(function(){
		person = new Person("Praggya", "Barretto");
		invalid_person = new Person();
	});
	it('has a first and last name', function(){
		expect(person.first_name).toBe("Praggya");
		expect(person.last_name).toBe("Barretto");
	});

	it('takes default values for age, weight, height, and friends', function(){
		expect(person.age).toBeLessThan(46);
		expect(person.age).toBeGreaterThan(24);
		expect(person.weight).toBeLessThan(101);
		expect(person.weight).toBeGreaterThan(59);
		expect(person.height).toBeLessThan(201);
		expect(person.height).toBeGreaterThan(149);
		expect(person.friends instanceof Array).toBe(true);
	});

	it('has a function called fullName that adds first_name and last_name', function(){
		person.fullName();
		expect(person.fullName()).toEqual("Praggya Barretto");
	});

	it('has a function weightInStone that converts a persons weight to stone', function(){
		person.weight = 100;
		person.weightInStone();
		expect(person.weightInStone()).toBeCloseTo(15.75, 1);
	});

	it('adds a new person to the friends list', function(){
		person2 = new Person("Mike", "Stone");
		person3 = new Person("Another", "Person");
		person.addFriend(person2);
		expect(person.friends).toContain(person2);
		expect(person.friends).not.toContain(person3);
	});

	it ('removes a person from the friends collection by name', function() {
		person.addFriend(person2);
		expect(person.friends).toContain(person2);
		person.removeFriend(person2.first_name);
		expect(person.friends).not.toContain(person2);
	});
});
