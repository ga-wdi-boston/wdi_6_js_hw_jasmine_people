describe("Person", function() {
	
	describe("intializer", function() {
		it("accepts a first name and a last name", function() {
			this.person = new Person("Chuck", "Norris");

			expect(this.person.firstName).toEqual("Chuck");
			expect(this.person.lastName).toEqual("Norris");
		});

		it("has optional properties with default values", function() {
			this.person = new Person("Melissa", "McCarthy");

			expect(this.person.ageinYears).toBeNull(30);
			expect(this.person.weightinKilograms).toBeNull(80);
			expect(this.person.heightinCentimeters).toBeGreaterThan(150);
			expect(this.person.heightinCentimeters).toBeLessThan(200);
			expect(this.person.friends).toBeNull([ ]);
		});
	}); 

});












	// 		expect(this.person.firstName).toEqual(this.person.firstName);
	// 		expect(this.person.lastName).toEqual(this.person.lastName);
	// 		if (this.person.ageinYears === undefined) {
	// 			expect(this.person.ageinYears).toEqual(30);
	// 		}
	// 		else {
	// 			expect(this.person.ageinYears).toEqual(this.person.ageinYears);
	// 		}
			
	// 		if (this.person.weightinKilograms === undefined) {
	// 			expect(this.person.weightinKilograms).toEqual(80);
	// 		}
	// 		else {
	// 			expect(this.person.weightinKilograms).toEqual(this.person.weightinKilograms);
	// 		}

	// 		if (this.person.heightinCentimeters === undefined) {
	// 			expect(this.person.heightinCentimeters).toEqual((Math.floor(Math.random() * 50) + 150));
	// 		}
	// 		else {
	// 			expect(this.person.heightinCentimeters).toEqual(this.person.heightinCentimeters);
	// 		}

	// 		if (this.person.friends === undefined) {
	// 			expect(this.person.friends).toEqual([ ]);
	// 		}
	// 		else {
	// 			expect(this.person.friends).toEqual(this.person.friends);
	// 		}

	// 	}); 
	// });

	// describe("#fullName", function() {
	// 	it ("returns the person's first name and last name", function() {
	// 		this.person.fullName();

	// 		expect(this.person.fullName).toEqual(this.person.firstName + " " + this.person.lastName);






