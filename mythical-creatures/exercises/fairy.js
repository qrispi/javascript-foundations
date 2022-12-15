class Fairy {
    constructor(fairyName) {
        this.name = fairyName
        this.dust = 10
        this.disposition = 'Good natured'
        this.humanWards = []
        this.clothes = {
            dresses: ['Iris']
        }
    }

    receiveBelief() {
        this.dust++
    }

    believe() {
        this.dust += 10
    }

    makeDresses(flowers) {
        for (var i =0; i < flowers.length; i++) {
            this.clothes.dresses.push(flowers[i])
        }
    }

    becomeProvoked() {
        this.disposition = 'Vengeful'
    }

    replaceInfant(infant) {
        if (this.disposition === 'Vengeful') {
            this.humanWards.push(infant)
            infant.disposition = 'Malicious'
            if (this.humanWards.length === 3) {
                this.disposition = 'Good natured'
            }
        } else {
            return infant
        }
    }
}

module.exports = Fairy