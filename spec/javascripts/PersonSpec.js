describe("Person", function(){
  beforeEach(function(){
    this.person = new Person("George", "Straehle");
  });

  describe("initializer", function(){
    it("initializes firstName", function(){

    expect(this.person.firstName).toEqual("George");
    expect(this.person.lastName).toEqual("Straehle");
    expect(this.person.age).toEqual(30);
    expect(this.person.weight).toEqual(80);
    expect(this.person.height).toBe(100);
    expect(this.person.friends.length).toEqual(0);
  });
});
});

