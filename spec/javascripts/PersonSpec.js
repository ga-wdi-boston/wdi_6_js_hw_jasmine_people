describe("Person", function(){
  beforeEach(function(){
    this.person = new Person("George", "Straehle");
  });

  describe("initializer", function(){
    it("initializes firstName", function(){

    expect(this.person.firstName).toEqual("George");
  });
});
});
