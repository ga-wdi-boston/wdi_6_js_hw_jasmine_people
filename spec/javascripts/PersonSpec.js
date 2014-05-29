describe("Person", function(){
  beforeEach(function(){
    this.person = new Person("George", "Straehle");
  });

describe("initializer", function(){
  it("initializes firstName, lastName, age, weight, height, friends", function(){

    expect(this.person.firstName).toEqual("George");
    expect(this.person.lastName).toEqual("Straehle");
    expect(this.person.age).toEqual(30);
    expect(this.person.weight).toEqual(80);
    expect(this.person.height).toBeGreaterThan(150);
    expect(this.person.height).toBeLessThan(200);
    expect(this.person.friends.length).toEqual(0);
  });
});

describe("#fullName", function(){
  it("makes one expression out of firstName and lastName", function(){

    expect(this.person.fullName()).toBe("George Straehle");
  });
});

});

