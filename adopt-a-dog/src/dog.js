class Dog {
  constructor(dogObject) {
    this.name = dogObject.name
    this.age = dogObject.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }

  eat() {
    if (this.hungry) {
      this.hungry = false
      return 'Yum!'
    }
    return 'I refuse to eat.'
  }

  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel--
      return 'This is fun!'
    }
    return 'Nah, I\'m going to sleep instead.'
  }

  makeNewFriend(friend) {
    this.friends.push(friend.name)
  }

  sleep() {
    if (this.energyLevel === 10) {
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }
    this.energyLevel++
  }
}

module.exports = Dog;
