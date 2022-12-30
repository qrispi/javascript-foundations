var Skier = require('./Skier');

class Lift {
    constructor(number) {
        this.inService = true
        this.limit = number
        this.skiers = []
        this.safetyBar = 'up'
    }

    admitSkier(name, ticket) {
        var skier = new Skier(name, ticket)
        if (this.limit > 0 && skier.hasLiftTicket) {
            this.limit--
            this.skiers.push(skier)
        } else if (this.limit < 1) {
            return `Sorry, ${name}. Please wait for the next lift!`
        } else if (!skier.hasLiftTicket) {
            return `Sorry, ${name}. You need a lift ticket!`
        }
    }

    startLift() {
        if (this.limit === 0) {
            this.safetyBar = 'down'
        } else if (this.limit === 1) {
            return `We still need ${this.limit} more skier!`
        } else {
            return `We still need ${this.limit} more skiers!`
        }
    }
}

module.exports = Lift;