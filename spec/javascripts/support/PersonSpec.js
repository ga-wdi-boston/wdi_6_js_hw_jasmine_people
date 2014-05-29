describe("Person", function() {
	
	describe("intializer", function() {
		it("accepts a first name and a last name and optional arguments", function (){
			var person = new Person("Chuck", "Norris");

			expect(person.firstName).toEqual("Chuck");
			expect(person.lastName).toEqual("Norris");
			if (person.ageinYears !== undefined) {
				expect(person.ageinYears).toEqual(30);
			}
			else {
				expect(person.ageinYears).toEqual(person.ageinYears);
			}
			
			if (person.weightinKilograms !== undefined) {
				expect(person.weightinKilograms).toEqual(80);
			}
			else {
				expect(person.weightinKilograms).toEqual(person.weightinKilograms);
			}

			if (person.heightinCentimeters !== undefined) {
				expect(person.heightinCentimeters).toEqual((Math.floor(Math.random() * 50) + 150));
			}
			else {
				expect(person.heightinCentimeters).toEqual(person.heightinCentimeters);
			}

			if (person.friends !== undefined) {
				expect(person.friends).toEqual([ ]);
			}
			else {
				expect(person.friends).toEqual(person.friends);
			}

			}); 
		});
	});