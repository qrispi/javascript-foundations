class Vampire {
    constructor(name, pet) {
        this.name = name
        if (pet === undefined) {
            this.pet = 'bat'
        } else {
            this.pet = pet
        }
        this.thirsty = true
        this.ouncesDrank = 0
    }
    drink() {
        this.thirsty = false
        this.ouncesDrank += 10
    }
}

module.exports = Vampire