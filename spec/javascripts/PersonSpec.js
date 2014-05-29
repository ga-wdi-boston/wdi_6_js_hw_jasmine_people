describe("Person", function(){
  describe("initializer", function(){
    it("takes a first and last name", function(){
      var person = new Person("Bob", "Loblaw");

      expect(person.firstName).toEqual("Bob");
      expect(person.LastName).toEqual("Loblaw");
    });
  });

  beforeEach(function() {
    this.person = new Person("Bob", "Loblaw");
  });

  describe("properties", function(){
    it("include age, which defaults to 30", function(){
      this.person.age = 30;

      expect(this.person.age).toEqual(30);
    });

    it("include weight, which defaults to 80", function(){
      this.person.weight = 80;

      expect(this.person.weight).toEqual(80);
    });

    it("include friends array, which defaults to empty", function(){
      this.person.friends = [];

      expect(this.person.weight).toEqual(80);
    });
  });

  describe("#fullName", function(){
    it("returns the person's first name plus last name", function(){
      this.person.fullName();

      expect(this.person.fullName).toBe("Bob Loblaw");
    });
  });
});
