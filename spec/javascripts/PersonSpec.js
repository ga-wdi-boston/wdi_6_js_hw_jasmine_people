describe("Person", function(){ // Describing the class we want to look at
  describe("initializer", function(){ // Each area of functionality we would like to test.
    it("accepts a first and last name", function(){
      var person = new Person("Jon", "Doe");

      expect(person.firstName).toEqual("Jon");
      expect(person.lastName).toEqual("Doe");
    });
    it("has a default age", function(){
      var person = new Person("Jon", "Doe");
      expect(person.age).toEqual(30);
    });
    it("accepts an age", function(){
      var person = new Person("Jon", "Doe", 33);
      expect(person.age).toEqual(33);
    });
    it("has a default weight", function(){
      var person = new Person();
      expect(person.weight).toEqual(80);
    });
    it("accepts a weight", function(){
      var person = new Person("Jon", "Doe", 33, 64);
      expect(person.weight).toEqual(64);
    });
  });
});
