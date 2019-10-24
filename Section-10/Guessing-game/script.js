//create secretNumber

var secretNumber= 4;

//ask user for guess

var guess = Number(prompt("Guess any number"));
// alert(guess)


//Check if guess is correct

if (guess === secretNumber) {
  alert("You got it!")
}

//check if higher

else if (guess > secretNumber){
  alert("Too High, guess again")
}

else {
  alert("Too low, guess again")
}
