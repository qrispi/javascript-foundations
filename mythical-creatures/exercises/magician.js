class Magician {
    constructor(magicianObject) {
        this.name = `The Great ${magicianObject.name}`
        this.assistant = magicianObject.assistant || false
        this.favoriteAccessory = magicianObject.clothing || 'top hat'
        this.confidencePercentage = 10
    }

    performIncantation(spell) {
        return spell.toUpperCase() + '!'

    }

    performTrick() {
        this.confidencePercentage += 10
        return this.favoriteAccessory === 'cape' ? 'PULL DOVE FROM SLEEVE' : 'PULL RABBIT FROM TOP HAT'
    }

    performShowStopper() {
        return (this.confidencePercentage < 100 || !this.assistant) ? 'Oh no, this trick is not ready!' : 'WOW! The magician totally just sawed that person in half!'
    }
}

module.exports = Magician