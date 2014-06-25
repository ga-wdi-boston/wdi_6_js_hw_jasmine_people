describe('Person', function() {
  beforeEach(function() {
    this.person = new Person('Mike', 'Talley');
  });

  it('initializes name, age, weight, height, and friends', function() {
    expect(this.person.firstName).toBe('Mike');
    expect(this.person.lastName).toBe('Talley');
    expect(this.person.age).toBe(30);
    expect(this.person.weight).toBe(80);
    expect(this.person.height).toBeLessThan(201);
    expect(this.person.height).toBeGreaterThan(149);
    expect(this.person.friends).toEqual([]);
  });

});

describe('Person', function() {
  beforeEach(function() {
    mike = this.person = new Person('Mike', 'Talley', {age: 34, weight: 86, height: 182, friends: []});
  });

  it('accepts values as parameters', function() {
    expect(this.person.firstName).toBe('Mike');
    expect(this.person.lastName).toBe('Talley');
    expect(this.person.age).toBe(34);
    expect(this.person.weight).toBe(86);
    expect(this.person.height).toBe(182);
    expect(this.person.friends).toEqual([]);
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

      expect(this.person.friends).toEqual([mike]);
    });
  });

  describe("#removeFriend", function(removeName){
    it("removes a selected friend from friends array", function() {
      this.person.removeFriend('Mike Talley');

      expect(this.person.friends).toEqual([]);
    });
  });
});

describe('Person', function() {
  beforeEach(function() {
    mike = new Person('Mike', 'Talley', {age: 34, weight: 86, height: 182, friends: []});
    joe = new Person('Mike', 'Talley', {age: 34, weight: 86, height: 182, friends: []});
    bob = new Person('Mike', 'Talley', {age: 34, weight: 86, height: 182, friends: [mike, joe]});
  });

  describe("#greetPeople", function(people){
    it("greets people", function() {
      expect(mike.greetPeople([joe, bob])).toContain('Hi, ' + joe.fullName());
      expect(bob.greetPeople()).toContain('Hi, ', mike.fullName());
      expect(function() {
        joe.greetPeople();
      }).toThrowError('No people/friends to greet!');
    });
  });

});


