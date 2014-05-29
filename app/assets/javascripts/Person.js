function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
    if (age === undefined){
      this.age = 30;
    }
    else {
      this.age = age;
    }
  this.weight = 80;
}
