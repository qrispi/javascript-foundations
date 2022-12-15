class Direwolf {
    constructor(wolfName, wolfHome, wolfSize) {
        this.name = wolfName
        this.home = wolfHome || 'Beyond the Wall'
        this.size = wolfSize || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }

    protect(starkObject) {
        if (starkObject.location === this.home && this.starksToProtect.length < 2) {
            this.starksToProtect.push(starkObject)
            starkObject.safe = true
            this.huntsWhiteWalkers = false
        }
    }

    leave(starkObject) {
        var personNum = this.starksToProtect.indexOf(starkObject)
        starkObject.safe = false
        this.starksToProtect.splice(personNum, 1)
    }
}

module.exports = Direwolf