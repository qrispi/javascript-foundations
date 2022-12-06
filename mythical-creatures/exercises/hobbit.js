class Hobbit {
    constructor(hobbit) {
        this.name = hobbit.name
        this.age = 0
        this.adult = false
        this.old = false
        this.hasRing = false
    }
    celebrateBirthday() {
        this.age++
        this.age > 100 ? this.old = true : this.age > 32 ? this.adult = true : this.adult = false
    }
    getRing() {
        return this.name === 'Frodo' ? (this.hasRing = true, `Here is the ring!`) : `You can\'t have it!`
    }
}

module.exports = Hobbit