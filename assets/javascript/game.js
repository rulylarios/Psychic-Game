
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = [];

window.onload = function(){
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(randomLetter);
	console.log(computerGuess[0]);
}

var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = 0


document.onkeyup = function(event) {
var userChoice = event.key;
var guessIndex = computerGuess[0].indexOf(userChoice);
guessesSoFar++;
if(guessIndex === -1){
	console.log("Incorrect Guess!");
	guessesLeft = guessesLeft - 1;
	
		var winLog = document.getElementById("wins");
     	winLog.innerHTML = wins;
		var lossLog = document.getElementById("losses");
     	lossLog.innerHTML = losses;
		var guessesLeftLog = document.getElementById("left");
     	guessesLeftLog.innerHTML = guessesLeft;
		var guessesSoFarLog = document.getElementById("total");
     	guessesSoFarLog.innerHTML = guessesSoFar;
	
	if(guessesLeft <= 0){
		losses++;
		guessesLeft = 9
		var winLog = document.getElementById("wins");
     	winLog.innerHTML = wins;
		var lossLog = document.getElementById("losses");
     	lossLog.innerHTML = losses;
		var guessesLeftLog = document.getElementById("left");
     	guessesLeftLog.innerHTML = guessesLeft;
		var guessesSoFarLog = document.getElementById("total");
     	guessesSoFarLog.innerHTML = guessesSoFar;
		alert("You lose! Guess another letter!");
		computerGuess.length = 0;
		var randomLetter = letters[Math.floor(Math.random() * letters.length)];
		computerGuess.push(randomLetter);
		console.log(computerGuess[0]);
		//var randomLetter = letters[Math.floor(Math.random() * letters.length)];

}

	

} else {
	alert("Letter " + userChoice + " is correct! Guess again!")
	wins++;
	var winLog = document.getElementById("wins");
     winLog.innerHTML = wins;
	var lossLog = document.getElementById("losses");
     lossLog.innerHTML = losses;
	var guessesLeftLog = document.getElementById("left");
     guessesLeftLog.innerHTML = 9;
	var guessesSoFarLog = document.getElementById("total");
     guessesSoFarLog.innerHTML = guessesSoFar;
	
	computerGuess.length = 0;
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(randomLetter);
	console.log(computerGuess[0]);

	//var randomLetter = letters[Math.floor(Math.random() * letters.length)];
}
};

        

