
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var myArray = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainText = document.getElementById("remain-text");
var guessText = document.getElementById("guess-text");

var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
console.log(computerGuess);

document.onkeypress = function (event) {

    var userGuess = event.key;
    myArray.push(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        guesses = 10;
        myArray = [];
        computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
        console.log(computerGuess);

    } else {
        guesses--;
    }
    if (guesses === 0) {
        losses++;
        guesses = 10;
        myArray = [];
        computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
        console.log(computerGuess);
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainText.textContent = "Guesses Left: " + guesses;
    guessText.textContent = "Your Guesses So Far: " + myArray.join(", ");

}