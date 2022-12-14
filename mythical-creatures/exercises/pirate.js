class Pirate {
    constructor(pirateName, job) {
        this.name = pirateName
        this.job = job || 'scallywag'
        this.cursed = false
        this.booty = 0
    }

    robShip() {
        return this.booty < 500 ? (this.booty += 100, 'YAARRR!') :
            (this.cursed = true,
            'ARG! I\'ve been cursed!')
    }

    liftCurse() {
        return !this.cursed ? 'You don\'t need to lift a curse!' :
            (this.booty -= 300,
            this.cursed = false,
            'Your curse has been lifted!')
    }
}

module.exports = Pirate