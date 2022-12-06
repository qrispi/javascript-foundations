class Hobbit {
    constructor(hobbit) {
        this.name = hobbit.name
        this.age = 0
        this.adult = false
        this.old = false
    }
    celebrateBirthday() {
        this.age++
        if (this.age > 100) {
            this.old = true
        } else if (this.age > 32) {
            this.adult = true
        }
    }
}

module.exports = Hobbit