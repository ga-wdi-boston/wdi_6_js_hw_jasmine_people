describe("Player", function() {

  beforeEach(function(){
    this.player = new Player("Ethan", "Gould");
  });

  describe("#firstName", function(){
    it("has a first name", function(){

      expect(this.player.firstName).toBe("Ethan");
    });
  });

  describe("#lastName", function(){
    it("has a last name", function(){

      expect(this.player.lastName).toBe("Gould");
    });
  });

  describe("#age", function(){

  });
});
