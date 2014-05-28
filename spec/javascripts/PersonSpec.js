describe('Person', function() {
  beforeEach(function() {
    this.person = new Person('Mike', 'Talley');
  });

  it('initializes name, age, weight, height, and friends', function() {
    expect(this.person.firstName).toBe('Mike');
    expect(this.person.lastName).toBe('Talley');
    expect(this.person.age).toBe(30);
    expect(this.person.weight).toBe(80);
    expect(this.person.height).toBeLessThan(200);
    expect(this.person.height).toBeGreaterThan(150);
    expect(this.person.friends.length).toBe(0);
  });

});

describe('Person', function() {
  beforeEach(function() {
    mike = this.person = new Person('Mike', 'Talley', 34, 86, 182, []);
  });

  it('accepts values as parameters', function() {
    expect(this.person.firstName).toBe('Mike');
    expect(this.person.lastName).toBe('Talley');
    expect(this.person.age).toBe(34);
    expect(this.person.weight).toBe(86);
    expect(this.person.height).toBe(182);
    expect(this.person.friends.length).toBe(0);
  });

  describe("#fullName", function(){
    it("displays persons full name", function() {
      expect(this.person.fullName()).toBe('Mike Talley');
    });
  });

  describe("#weightInStone", function(){
    it("displays weight in stone", function() {
      expect(this.person.weightInStone()).toBeCloseTo(13.54);
    });
  });

  describe("#addFriend", function(person){
    it("adds a friend to friends array", function() {
      this.person.addFriend(mike);

      expect(this.person.friends.length).toBe(1);
    });
  });

  xdescribe("#removeFriend", function(){
    it("", function() {

    });
  });

  xdescribe("#greetPeople", function(){
    it("", function() {

    });
  });

});


