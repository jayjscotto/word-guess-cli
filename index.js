//word guess array
var word = require ('./word');
var inquirer = require ('inquirer');

const words = ["hello", "ferarri", "boat", "javascript", "four", "five"];

let index = 0;
let gameWord;
let lives;

function roll() {
    index = Math.floor(Math.random() * 6);
    gameWord = new word(words[index]);
    
    return gameWord
}

function newGame() {
    roll();
    console.log(`\r\n Beginning a New Game!\r\n `)
    console.log(`\nWORD TO GUESS: ${gameWord.printWord()}\n`);
    //console.log(gameWord.wordArr.join(""));
    promptUser();
}
newGame();

function promptUser() {
    lives = gameWord.allowedGuesses;
    console.log(`Lives Left: ${lives}\r\n`);

    if (lives > 0) {
    inquirer.prompt([
            {
                type: "input",
                name: "prompt guess",
                message: "Guess a letter:"
            }
        ]).then(function (response, err) {
            if (err) {
                console.log(err)
            }
            //guess string variable
            let guess = Object.values(response).toString();
            //evaluate the guess
            gameWord.letterGuess(guess)
            console.log(`\r\n${gameWord.printWord()}\r\n`);


            let guessedArray = []
            for (let i = 0; i < gameWord.guessObj.length; i++) {
                guessedArray.push(gameWord.guessObj[i].guessed);
            }
            
            if (guessedArray.indexOf(false) != -1) {
                return promptUser();
            } else if (guessedArray.indexOf(false) === -1) {
                console.log(`You WIN!`)
                return promptNew();
            } 
        })} else {
            console.log(`\r\n YOU LOSE \r\n`);
            return promptNew();
        }
}

function promptNew () {
    inquirer.prompt(
        {
            type: "confirm",
            name: "confirm",
            message: "Start a new game?"
        }).then(function (response, err) {
            if (err) {
                console.log(err)
            }
            if (response.confirm) {
                return newGame();
            } else {
                console.log(`Thanks for playing!`);
                return false;
            }
        })
}
