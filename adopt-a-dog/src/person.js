var Dog = require("./dog.js");

class Person {
  constructor(name, dogObject) {
    this.name = name
    this.dog = dogObject
  }

  fillFoodBowl() {
    this.dog.eat()
    // alternatively you could use this.dog.hungry = false
    // the most correct way to do this is to not directly change another classes properties
  }

  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(friend) {
    this.dog.makeNewFriend(friend)
  }

  adoptAPup(dogName, dogAge) {
    if (this.dog) {
      return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`
    }
    this.dog = new Dog({name: dogName, age: dogAge})
  }
}

module.exports = Person;
