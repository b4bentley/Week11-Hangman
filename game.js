var wordBank = ['testy', 'brent', 'hello', 'happy', 'test'];

function game(){
	this.word;

	this.startNewGame = function(){
		this.word = this.generateRandomWord();
	}

	this.generateRandomWord = function(){
		var len = wordBank.length;
		var randomWord = wordBank[Math.floor(Math.random() * len)];

		console.log("test generateRandomWord word: " + randomWord);

		return randomWord;
	}
	
	//method to check if a word is being created
	this.printWord = function(){
		console.log('printWord test word is: ' + this.word);
	}
}

module.exports = game;