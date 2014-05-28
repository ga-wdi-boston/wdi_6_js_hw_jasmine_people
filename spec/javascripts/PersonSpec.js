/* global describe, it, expect, Person, beforeEach */

describe("Person", function(){

  beforeEach(function() {
    this.person = new Person("Lisa", "Plesko");
    this.friend = new Person("Susie", "Q");
  });

  describe("initializer", function(){
    it("accepts a first name and last name", function(){

      expect(this.person.firstName).toEqual("Lisa");
      expect(this.person.lastName).toEqual("Plesko");
    });



    it("can also accept age, weight, height and friends", function(){
      var height = (Math.floor(Math.random() * 50 + 150 ));

      expect(this.person.age).toEqual(30);
      expect(this.person.weight).toEqual(80);
      expect(this.person.height).toBeGreaterThan(149);
      expect(this.person.height).toBeLessThan(201);
      expect(this.person.friends.length).toBe(0);
    });
  });

  describe("#fullName", function(){
    it("returns a first and last name", function() {

      expect(this.person.fullName()).toBe("Lisa Plesko");
    });
  });

  describe("#weightInStone", function(){
    it("converts weight from kg to stone", function() {

      expect(this.person.weightInStone()).toBeCloseTo(12.6);
    });
  });

  describe("#addFriend", function(){
    it("adds a new person to the current person's friends", function(){
      this.person.addFriend(this.friend);

      expect(this.person.friends).toContain(this.friend);
    });
  });

  describe("#removeFriend", function(){
    it("removes a person from current friends", function(){
      this.person.addFriend(this.friend);
      this.person.removeFriend("Susie Q");

      expect(this.person.friends).not.toContain("Susie Q");
    });
  });

  describe("#greetPeople", function(){
    var lisa = new Person("Lisa", "Plesko");

    it("should greet all of a user's friends by full names with hi", function(){
      this.person.addFriend(this.friend);

      expect(this.person.greetPeople()).toBe('Hi, Susie Q');
    });

    it("should throw an error if user has no friends", function(){

      expect(function() {
        lisa.greetPeople();
      }).toThrowError("you have no friends!");
    });
  });

});


