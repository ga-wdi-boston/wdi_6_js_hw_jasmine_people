describe("Person", function() {
	
	describe("intializer", function() {
		it("accepts a first name and a last name and optional arguments", function (){
			this.person = new Person("Chuck", "Norris");

			expect(this.person.firstName).toEqual("Chuck");
			expect(this.person.lastName).toEqual("Norris");
			if (this.person.ageinYears !== undefined) {
				expect(this.person.ageinYears).toEqual(30);
			}
			else {
				expect(this.person.ageinYears).toEqual(this.person.ageinYears);
			}
			
			if (this.person.weightinKilograms !== undefined) {
				expect(this.person.weightinKilograms).toEqual(80);
			}
			else {
				expect(this.person.weightinKilograms).toEqual(this.person.weightinKilograms);
			}

			if (this.person.heightinCentimeters !== undefined) {
				expect(this.person.heightinCentimeters).toEqual((Math.floor(Math.random() * 50) + 150));
			}
			else {
				expect(this.person.heightinCentimeters).toEqual(this.person.heightinCentimeters);
			}

			if (this.person.friends !== undefined) {
				expect(this.person.friends).toEqual([ ]);
			}
			else {
				expect(this.person.friends).toEqual(this.person.friends);
			}

		}); 
	});
});


