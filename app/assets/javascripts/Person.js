function Person(firstName, lastName, age, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
    if (age === undefined){
      this.age = 30;
    }
    else {
      this.age = age;
    }

    if (weight === undefined){
      this.weight = 80;
    }
    else {
      this.weight = weight;
    }
}
