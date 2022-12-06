class Vampire {
    constructor(name, pet) {
        this.name = name
        pet === undefined ? this.pet = 'bat' : this.pet = pet
        this.thirsty = true
        this.ouncesDrank = 0
    }
    drink() {
        this.thirsty = false
        return this.ouncesDrank < 50 ? this.ouncesDrank += 10 : `I\'m too full to drink anymore!`
    }
}

module.exports = Vampire