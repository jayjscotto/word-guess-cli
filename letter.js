var Letter = function (char) {
    this.letter = char;
    this.display = "_";
    this.guessed = false;

    this.isGuessed = function () {
        if (this.guessed === true) {
            this.display = this.letter;
        }
    };

    this.check = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
            this.isGuessed();
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Letter;