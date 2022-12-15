class Werewolf {
    constructor(wolfName) {
        this.name = wolfName
        this.form = 'human'
        this.hungry = false
    }

    completeTransformation() {
        if (this.form === 'human') {
            this.form = 'wolf'
            this.hungry = true
            return 'Aaa-Woooo!'
        } else {
            this.form = 'human'
            this.hungry = false
            return 'Where are I?'
        }
    }

    eatVictim(victim) {
        if (this.form === 'human') {
            return `No way am I eating ${victim.name}, I'd like a burger!`
        } else {
            victim.alive = false
            this.completeTransformation()
            return `Yum, ${victim.name} was delicious.`
        }
    }
}

module.exports = Werewolf