class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max - 1
        this.min = min + 1
    }

    guess() {
return Math.round(this.min + ((this.max - this.min) / 2))
    }

    lower() {
this.max = this.guess() - 1
    }

    greater() {
        this.min = this.guess() + 1
    }
}

module.exports = GuessingGame;
