const Direwolf = require('../exercises/direwolf')

class Stark {
    constructor(personObject) {
        this.name = personObject.name
        this.location = personObject.area || 'Winterfell'
        this.safe = false
    }

    sayHouseWords() {
        if (this.safe) {
            return 'The North Remembers'
        } else {
            return 'Winter is Coming'
        }
    }

    callDirewolf(wolfName) {
        this.safe = true
        var calledWolf = new Direwolf(wolfName, this.location)
        calledWolf.protect(this)
        return calledWolf
    }
}

module.exports = Stark