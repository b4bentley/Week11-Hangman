var inquirer = require('inquirer');

var Game = require('./game.js');

var game = new Game();

function initHangman(){
	game.startNewGame();
	//test case 1: whether a random word is being created
	game.printWord();
}

initHangman();