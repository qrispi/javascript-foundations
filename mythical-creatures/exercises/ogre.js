class Ogre {
    constructor(ogre) {
        this.name = ogre.name
        this.home = ogre.abode || 'Swamp'
        this.swings = 0
    }

    encounter(human) {
        human.encounterCounter++
        if (human.noticesOgre()) {
            this.swings++
            if (this.swings > 1) {
                human.knockedOut = true
            }
        }
    }

    swingAt() {
        this.swings++
    }

    apologize(human) {
        human.knockedOut = false
    }
}

module.exports = Ogre