class GolfCourse {
    constructor(courseName, courseDifficulty, dayOpenings, courseFeatures) {
        this.name = courseName
        this.difficulty = courseDifficulty
        this.openings = dayOpenings
        this.features = courseFeatures
        this.currentlyPlaying = []
    }

    checkInGroup(golfers) {
        if (this.openings > golfers.length) {
            this.openings -= golfers.length
            for (var i = 0; i < golfers.length; i++) {
                this.currentlyPlaying.unshift(golfers[i].name)
            }
            return 'You\'re checked in. Have fun!'
        } else {
            return 'Sorry, we are currently booked! Please come back later.'
        }
    }
}

module.exports = GolfCourse;
