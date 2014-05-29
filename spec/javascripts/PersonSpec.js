describe("Person", function(){
  describe("initializer", function(){
    it("takes a first and last name", function(){
      var person = new Person("Bob", "Loblaw");

      expect(person.firstName).toEqual("Bob");
      expect(person.LastName).toEqual("Loblaw");
    });
  });
});
