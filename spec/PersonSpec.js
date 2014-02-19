describe("Person", function () {
  var person;

  it("should be initialized with first and last names", function() {
    person = new Person("Jordan", "Morano");

    expect(person.firstName).toEqual("Jordan");
    expect(person.lastName).toEqual("Morano");
    expect(function(){
      bad = new Person("Jordan");
    }).toThrowError("A valid person must have a first and last name.")
  });

  describe("Check optional properties.", function(){
    it("has optional properties with default values",function(){
      person = new Person("Yiyang", "Song");
      expect(person.age).toBeLessThan(46);
      expect(person.age).toBeGreaterThan(24);
      expect(person.weight).toBeLessThan(100);
      expect(person.weight).toBeGreaterThan(60);
      expect(person.height).toBeLessThan(200);
      expect(person.height).toBeGreaterThan(150);
      expect(person.friends instanceof Array).toBeTruthy();
    });

    it("lets you use an options object to set optional properties", function(){
      var jord, options;
      options = {
        age     : 31,
        height  : 150
      };
      jord = new Person("Jord", "Mor", options)
      expect(jord.age).toEqual(31);
      expect(jord.height).toEqual(150);
    });
  });

  describe("common behavior", function(){
    var person, options;
    options = {
      age    : 31,
      height : 160,
      weight : 70
    };
    beforeEach(function() {
      person = new Person("Jordan", "Morano", options);
      person_2 = new Person("Yiyang", "Song");
      person.addFriend(person_2);
    });

    it("#fullName", function(){
      expect(person.fullName()).toEqual("Jordan Morano");
    });

    it("#weightInStone", function() {
      expect(person.weightInStone()).toEqual(11.0231);
    });

    it("#addFriend", function() {
      expect(person.friends).toContain(person_2);
    });

    it("#removeFriend", function() {
      person.removeFriend("Yiyang");
      expect(person.friends).not.toContain(person_2);
    });
  });
});
