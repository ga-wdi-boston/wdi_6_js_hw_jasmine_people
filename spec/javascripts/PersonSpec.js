describe("Person", function(){ // Describing the class we want to look at
  describe("initializer", function(){ // Each area of functionality we would like to test.
    beforeEach(function() {
    this.defaultPerson = new Person();
    });

    it("accepts a first and last name", function(){
      var person = new Person("Jon", "Doe");

      expect(person.firstName).toEqual("Jon");
      expect(person.lastName).toEqual("Doe");
    });
    it("has a default age", function(){
      expect(this.defaultPerson.age).toEqual(30);
    });
    it("accepts an age", function(){
      var person = new Person("Jon", "Doe", 33);
      expect(person.age).toEqual(33);
    });
    it("has a default weight", function(){
      expect(this.defaultPerson.weight).toEqual(80);
    });
    it("accepts a weight", function(){
      var person = new Person("Jon", "Doe", 33, 64);
      expect(person.weight).toEqual(64);
    });
    it("has a default height", function(){
      // The default Height is a randomly generated number between
      // 150 and 200.  This test ensures the number falls within that range.
      expect(this.defaultPerson.height).not.toBeLessThan(150);
      expect(this.defaultPerson.height).not.toBeGreaterThan(200);
      expect(this.defaultPerson.height).not.toBeUndefined();
    });
    it("accepts a height", function(){
      var person = new Person("Jon", "Doe", 33, 64, 155);
      expect(person.height).toEqual(155);
    });
    it("has a default empty array of friends", function(){
      expect(this.defaultPerson.friends).toEqual([]);
    });
    it("accepts an array of friends(person objects)", function(){
      var friend1 = new Person();
      var friend2 = new Person();
      var person = new Person("Jon", "Doe", 33, 64, 155, [friend1, friend2]);
      expect(person.friends).toEqual([friend1, friend2]);
    });
  });
});
