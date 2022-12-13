var Snowman = require('./Snowman');

class Human {
    constructor(humanName) {
        this.name = humanName
        this.wantsToBuildASnowman = true
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }
    }

    gatherMaterials(type, quantity) {
        this.materials[type] += quantity
    }

    buildASnowman() {
        return new Snowman(this.materials)
    }

    placeMagicHat(newSnowman) {
        return newSnowman.canWearMagicHat() ? 'Woah, this snowman is coming to life!' : 'I guess I didn\'t build it correctly.'
    }
}

module.exports = Human;