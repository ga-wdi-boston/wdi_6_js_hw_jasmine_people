describe('Person', function() {
	var person;

	beforeEach(function() {
		person = new Person("Joe", "Cork");
		tom = new Person("Tom", "Dyer");
		david = new Person("David", "Fisher");
	})

	it("must be initialized with firstName and lastName", function() {
		expect(person.firstName).toEqual("Joe");
		expect(person.lastName).toEqual("Cork");

		expect(function() { person2 = new Person("Joe") }).toThrowError("Persons must have first name and last name");
	});

	it("should have an age, with default value between 25 and 45", function() {
		expect(person.age).toBeGreaterThan(24);
		expect(person.age).toBeLessThan(46);

		var person2 = new Person("Alex", "Grant", {age: 25});
		expect(person2.age).toEqual(25);
	});

	it("should have a weight, with default value between 60 and 100", function() {
		expect(person.weight).toBeGreaterThan(59);
		expect(person.weight).toBeLessThan(101);

		var person2 = new Person("Alex", "Grant", {weight: 80});
		expect(person2.weight).toEqual(80);
	});

	it("should have a height, with default value between 150 and 200", function() {
		expect(person.height).toBeGreaterThan(149);
		expect(person.height).toBeLessThan(201);

		var person2 = new Person("Alex", "Grant", {height: 170});
		expect(person2.height).toEqual(170);
	});

	it("should have friends, default empty", function() {
		expect(person.friends).toEqual([]);

		var person2 = new Person("Alex", "Grant", {friends: [tom, david]});
		expect(person2.friends).toEqual([tom, david]);
	});

	it(".fullName() should return firstname + lastname", function() {
		expect(person.fullName()).toEqual("Joe Cork");
		expect(david.fullName()).toEqual("David Fisher");
		expect(tom.fullName()).toEqual("Tom Dyer");
	});

	it(".weightInStone() should return weight in stone", function() {
		var person2 = new Person("Alex", "Grant", {weight: 80});
		var person3 = new Person("Matt", "Brendzel", {weight: 85});

		expect(person2.weightInStone()).toBeCloseTo(12.5978, 2);
		expect(person3.weightInStone()).toBeCloseTo(13.3852, 2);
	});


	it(".addFriend() should add a person object to a person's array friends", function() {

		person.addFriend(tom);
		expect(person.friends).toContain(tom);
		person.addFriend(david);
		expect(person.friends).toContain(david);
		expect(person.friends).toContain(tom);
	});

	it(".removeFriend() should remove a friend based on first name", function() {

		person.friends = [tom, david];
		person.removeFriend("Tom");
		expect(person.friends).toEqual([david]);

		person.removeFriend("Non-existent Friend");
		expect(person.friends).toEqual([david]);
	});

	describe(".greetPeople", function() {
		it("greets an array of person objects with default greeting 'Hi'", function() {
			expect(person.greetPeople({people: [tom, david]})).toEqual("Hi, Tom Dyer\nHi, David Fisher\n");
		});
		it("greets friends by default if no friends provided", function() {
			person.friends = [tom];
			expect(person.greetPeople()).toEqual("Hi, Tom Dyer\n");
		});

		it("throws an error if no people or greeting are provided", function() {
			var hang = new Person("Hang", "Nguyen");
			expect(function() { hang.greetPeople(); }).toThrowError("Must input people or have friends.");
		});

	});
});





