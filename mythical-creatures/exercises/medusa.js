var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaName) {
        this.name = medusaName
        this.statues = []
    }

    gazeAtVictim(person) {
        var victim = new Statue(person.name)
        if (this.statues.length === 3) {
            this.statues.push(victim)
            var freedStatue = this.statues.splice(0, 1)
            var freedPerson = new Person(freedStatue[0].name)
            freedPerson.mood = 'relieved'
            return freedPerson
        } else {
            this.statues.push(victim)
        }
    }
}

module.exports = Medusa