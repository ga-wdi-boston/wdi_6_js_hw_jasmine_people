describe("Player", function() {

  beforeEach(function(){
    this.player = new Player("Ethan", "Gould", 30);
  });

  describe("#firstName", function(){
    it("person has a first name", function(){

      expect(this.player.firstName).toBe("Ethan");
    });
  });

  describe("#lastName", function(){
    it("person has a last name", function(){

      expect(this.player.lastName).toBe("Gould");
    });
  });

  describe("#age", function(){
    it("person has an age, defaults to 30", function(){

      expect(this.player.age).toBe(30);
    });
  });
});
