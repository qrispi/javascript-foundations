class Centaur {
    constructor(creature) {
        this.name = creature.name
        this.breed = creature.type
        this.cranky = false
        this.standing = true
        this.layingDown = false
        this.activities = 0
        this.layDown = this.standUp = () => {
            this.standing = !this.standing
            this.layingDown = !this.layingDown
        }
    }

    shootBow() {
        if (this.activities === 2) {
            this.cranky = true
            this.activities++
            return 'Twang!!!'
        } else if (this.cranky || this.layingDown) {
            return 'NO!'
        } else {
            this.activities++
            return 'Twang!!!'
        }
    }

    run() {
        if (this.activities === 2) {
            this.cranky = true
            this.activities++
            return 'Clop clop clop clop!!!'
        } else if (this.cranky || this.layingDown) {
            return 'NO!'
        } else {
            this.activities++
            return 'Clop clop clop clop!!!'
        }
    }

    sleep() {
        if (this.standing) {
            return 'NO!'
        } else {
            this.cranky = false
            return 'ZZZZ'
        }
    }

    drinkPotion() {
        if (this.standing) {
            this.cranky = false
            this.activities = 0
        } else {
            return 'Not while I\'m laying down!'
        }
    }
}

module.exports = Centaur