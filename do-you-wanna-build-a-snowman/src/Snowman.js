class Snowman {
    constructor(snowman) {
        this.carrots = snowman.carrots
        this.coal = snowman.coal
        this.buttons = snowman.buttons
        this.snowballs = snowman.snowballs
        this.magicHat = false
    } 

    canWearMagicHat() {
        return this.coal > 1 && this.buttons > 4 && this.carrots > 0 && this.snowballs > 1 ? this.magicHat = true : false
    }
}

module.exports = Snowman;