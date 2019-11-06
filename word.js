var letter = require ('./letter');

var Word = function (word) {
    //splits array
    this.wordArr = word.split("");
    
    //number of guesses
    this.allowedGuesses = this.wordArr.length + 3;

    //collection of letter Objects
    this.guessObj = [];
    for (let i = 0; i < this.wordArr.length; i++) {
        let newLetter = new letter(this.wordArr[i]);
        this.guessObj.push(newLetter)
    }

    //print the word with either underscores or letters that have been guessed
    this.printWord = function() {
        let printArr = [];
        for (let i = 0; i < this.guessObj.length; i++) {
            printArr.push(this.guessObj[i].display);
        }
       return printArr.join(" ");
    };

    //guess checking function
    this.letterGuess = function(guess) {
        let attempt = this.guessObj;
        this.guessArr = [];
        for (let i = 0; i < this.guessObj.length; i++) {
            this.guessArr.push(attempt[i].check(guess));
        }

        if (this.guessArr.includes(true)) {
            return false;
        } else {
            this.allowedGuesses--;
        }
        // this.guessArr = [];
        // for (let i = 0; i < this.guessObj.length; i++) {
        //     
        //     
        // }
        // if (this.guessArr.indexOf(true))
        
        
        this.printWord();
    };

}

module.exports = Word