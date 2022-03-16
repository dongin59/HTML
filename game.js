//create scretNumber
var secretNumber = 4;

//ask user for guess
var srtingGuess = prompt("Guess a number");
var guess = Number(srtingGuess);

//check guess
if (guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}
//check if guess is higher
else if (guess > secretNumber) {
    alert("Too high, Guess again!");
}

else {
    alert("Too low, Guess again!");
}
//otherwise, check if lower