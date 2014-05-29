describe("Person", function(){ // Describing the class we want to look at
  describe("initializer", function(){ // Each area of functionality we would like to test.
    it("accepts a first and last name", function(){
      var person = new Person("Jon", "Doe");

      expect(person.firstName).toEqual("Jon");
      expect(person.lastName).toEqual("Doe");
    });
  });
});
