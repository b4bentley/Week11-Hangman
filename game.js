var Word = require('./word.js');

var wordBank = ['testWord', 'testword withaspace', 'testwordwithanumber 7'];

function Game() {
    this.wins = 0;
    this.losses = 0;
    this.livesRemaining = 0;
    this.lettersUsed = [];
    this.word;

    this.startNewGame = function () {
        this.livesRemaining = 10;
        this.lettersUsed = [];
        this.word = this.generateRandomWord();

    };

    this.generateRandomWord = function () {
        var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        return new Word(randomWord);
    };

    this.printResults = function (str) {


        switch (str) {
            case "correct":
                console.log('correct');
                break;
            case "wrong":
                console.log('incorrect');
                console.log('# of guesses left', this.livesRemaining);
                break;
            case "already":
                console.log('already guessed');
                break;
            default:
                console.log('error');
        }

    }
}

module.exports = Game;