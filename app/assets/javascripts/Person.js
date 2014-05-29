function Person(firstName, lastName, age, weight, height) {
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
    if (height === undefined){
      this.height = Math.ceil(Math.random()*50 + 150);
    }
    else {
      this.height = height;
    }
}
