describe('Person', function(){
  describe('constructor', function(){
    it('sets all properties correctly', function(){
      var person = new Person(
        'Mike', 'Talley',
        { age: 34, weight: 86, height: 182, friends: ['dummy'] }
      );

      expect(person.firstName).toEqual('Mike');
      expect(person.lastName).toEqual('Talley');
      expect(person.age).toEqual(34);
      expect(person.weight).toEqual(86);
      expect(person.height).toEqual(182);
      expect(person.friends).toEqual(['dummy']);
    });

    it('has defaults for age, weight, height, and friends', function(){
      var person = new Person('Lisa', 'Plesko');

      expect(person.firstName).toEqual('Lisa');
      expect(person.lastName).toEqual('Plesko');
      expect(person.age).toEqual(30);
      expect(person.weight).toEqual(80);
      expect(person.height).toBeLessThan(201);
      expect(person.height).toBeGreaterThan(149);
      expect(person.friends.length).toEqual(0);
    });
  });

  describe("#fullName", function(){
    it("combines the first and last name", function(){
      var person = new Person('Mike', 'Talley');

      expect(person.fullName()).toEqual('Mike Talley');
    });
  });

  describe("#weightInStone", function(){
    it("returns the person's weight in stone", function(){
      var person = new Person('Mike', 'Talley', { weight: 86 });

      expect(person.weightInStone()).toBeCloseTo(13.54, 2);
    });
  });

  describe("#addFriend", function(){
    it("adds a friend to the friend list", function(){
      var person = new Person('Mike', 'Talley');
      var friend = new Person('Ethan', 'Gould');

      person.addFriend(friend);

      expect(person.friends).toEqual([friend]);
    });
  });

  describe("#removeFriend", function(){
    it("removes a friend from the friend list based on full name", function(){
      var person = new Person('Mike', 'Talley');
      var friend = new Person('Ethan', 'Gould');
      person.addFriend(friend);

      person.removeFriend('Ethan Gould');

      expect(person.friends).toEqual([]);
    });
  });

  describe("#greetPeople", function(){
    it("defaults to greeting the person's friends with 'Hi'", function(){
      var friend1 = new Person('Ethan', 'Gould');
      var friend2 = new Person('Lisa', 'Plesko');
      var person = new Person('Mike', 'Talley', { friends: [friend1, friend2] });

      expect(person.greetPeople()).toEqual('Hi, Ethan Gould! Hi, Lisa Plesko! ');
    });

    it("can be given a custom greeting", function(){
      var friend = new Person('Lisa', 'Plesko');
      var person = new Person('Mike', 'Talley', { friends: [friend] });

      expect(person.greetPeople({ greeting: 'Ahoy' })).toEqual('Ahoy, Lisa Plesko! ');
    });

    it("can be given a custom list of people to greet", function(){
      var friend = new Person('Lisa', 'Plesko');
      var person = new Person('Mike', 'Talley', { friends: [friend] });
      var nonFriend = new Person('Ethan', 'Gould');

      expect(person.greetPeople({ people: [nonFriend] })).toEqual('Hi, Ethan Gould! ');
    });

    it("throws an error if there is nobody to greet", function(){
      var person = new Person('Mike', 'Talley', { friends: [] });

      expect(function(){
        person.greetPeople();
      }).toThrowError('Nobody to greet!');
    });
  });
});
