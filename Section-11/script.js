var age = prompt("How old are you?");

if(age < 0){
  console.log("Sorry, there was an error. You have not been born yet...")
} else if (age < 18) {
  console.log("Sorry, you cannot enter")
} else if(age < 21) {
  console.log("You may enter, but you cannot drink.")
} else if(age === 21){
  console.log("Happy Birthday!")
} else if (age % 2 !== 0) {
  console.log("Your age is odd...")

}

 if(age %Math.sqrt(age) === 0) {
   console.log("Your age is a perfect square!");
 }
