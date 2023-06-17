let jeu = ["rock", "paper", "scissors"]; //table of elements possibles in RPS
let userScore = 0; //set user score to 0
let computerScore = 0; //set computer score to 0
let rock = "🪨"; //replace with rock emoji
let paper = "📜"; //replace with paper emoji
let scissors = "✂️"; //replace with scissors emoji

function button(type) {
  //function to get the user choice
  let computer = Math.floor(Math.random() * 3); //get a random number between 0 and 2
  let computerChoice = jeu[computer]; //get the element of the array corresponding to the random number
  let userChoice = type; //get the user choice

  if (userChoice === computerChoice) {
    //if the user choice is the same as the computer choice
    if (userChoice === "rock") {
      //if the user choice is rock
      userChoice = rock; //replace the user choice with the rock emoji
    } else if (userChoice === "paper") {
      //if the user choice is paper
      userChoice = paper; //replace the user choice with the paper emoji
    } else if (userChoice === "scissors") {
      //if the user choice is scissors
      userChoice = scissors; //replace the user choice with the scissors emoji
    }

    if (computerChoice === "rock") {
      //if the computer choice is rock
      computerChoice = rock; //replace the computer choice with the rock emoji
    } else if (computerChoice === "paper") {
      //if the computer choice is paper
      computerChoice = paper; //replace the computer choice with the paper emoji
    } else if (computerChoice === "scissors") {
      //if the computer choice is scissors
      computerChoice = scissors; //replace the computer choice with the scissors emoji
    }

    document.getElementById("userChoice").innerHTML = userChoice; //display the user choice
    document.getElementById("computerChoice").innerHTML = computerChoice; //display the computer choice

    tie(); //display the tie message
  } else if (userChoice === "rock" && computerChoice === "paper") {
    //if the user choice is rock and the computer choice is paper
    document.getElementById("userChoice").innerHTML = rock; //display the rock emoji
    document.getElementById("computerChoice").innerHTML = paper; //display the paper emoji

    loose(); //display the loose message
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    //if the user choice is rock and the computer choice is scissors
    document.getElementById("userChoice").innerHTML = rock; //display the rock emoji
    document.getElementById("computerChoice").innerHTML = scissors; //display the scissors emoji

    win(); //display the win message
  } else if (userChoice === "paper" && computerChoice === "rock") {
    //if the user choice is paper and the computer choice is rock
    document.getElementById("userChoice").innerHTML = paper; //display the paper emoji
    document.getElementById("computerChoice").innerHTML = rock; //display the rock emoji

    win(); //display the win message
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    //if the user choice is paper and the computer choice is scissors
    document.getElementById("userChoice").innerHTML = paper; //display the paper emoji
    document.getElementById("computerChoice").innerHTML = scissors; //display the scissors emoji

    loose(); //display the loose message
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    //if the user choice is scissors and the computer choice is rock
    document.getElementById("userChoice").innerHTML = scissors; //display the scissors emoji
    document.getElementById("computerChoice").innerHTML = rock; //display the rock emoji

    loose(); //display the loose message
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    //if the user choice is scissors and the computer choice is paper
    document.getElementById("userChoice").innerHTML = scissors; //display the scissors emoji
    document.getElementById("computerChoice").innerHTML = paper; //display the paper emoji

    win(); //display the win message
  }
}

function win() {
  //function to display the win message
  document.getElementById("infoText").innerHTML = "You Win!"; //display the win message
  document.getElementById("infoText").style.color = "green"; //display the win message in green

  document.getElementById("infoText2").innerHTML = "You Win!"; //display the win message
  document.getElementById("infoText2").style.color = "green"; //display the win message in green

  userScore++; //increment the user score
  document.getElementById("userScore").innerHTML = userScore; //display the user score

  if (userScore >= 5) {
    //if the user score is equal to 5
    ultraWin(); //display the ultra win message
  }
}

function loose() {
  //function to display the loose message
  document.getElementById("infoText").innerHTML = "You Loose"; //display the loose message
  document.getElementById("infoText").style.color = "red"; //display the loose message in red

  document.getElementById("infoText2").innerHTML = "You Loose"; //display the loose message
  document.getElementById("infoText2").style.color = "red"; //display the loose message in red

  computerScore++; //increment the computer score
  document.getElementById("computerScore").innerHTML = computerScore; //display the computer score

  if (computerScore >= 5) {
    //if the computer score is equal to 5
    ultraLoose(); //display the ultra loose message
  }
}

function tie() {
  //function to display the tie message
  document.getElementById("infoText").innerHTML = "It's a tie!"; //display the tie message
  document.getElementById("infoText").style.color = "orange"; //display the tie message in orange

  document.getElementById("infoText2").innerHTML = "It's a tie!"; //display the tie message
  document.getElementById("infoText2").style.color = "orange"; //display the tie message in orange
}

function ultraWin() {
  //function to display the ultra win message
  document.getElementById("infoText").innerHTML = "It's a win"; //display the win message
  document.getElementById("infoText").style.color = "#003300"; //display the win message in green

  document.getElementById("infoText2").innerHTML = "It's a win"; //display the win message
  document.getElementById("infoText2").style.color = "#003300"; //display the win message in green

  document.body.style.backgroundColor = "green"; //change the background color to green

  document.getElementById("userChoice").innerHTML = "<�"; //display the win message
  document.getElementById("computerChoice").innerHTML = "<�"; //display the win message

  document.getElementById("userScore").innerHTML = "You win!"; //display the win message
  document.getElementById("computerScore").innerHTML = "You win!"; //display the win message

  document.getElementById("computerInfo").style.display = "none"; //hide the computer score
  document.getElementById("userInfo").style.display = "none"; //hide the user score

  setTimeout(() => {
    //set a timeout to reset the game
    reset(); //reset the game
  }, 3000); //reset the game after 3 seconds
}

function ultraLoose() {
  //function to display the ultra loose message
  document.getElementById("infoText").innerHTML = "It's a loose"; //display the loose message
  document.getElementById("infoText").style.color = "#330000"; //display the loose message in red

  document.getElementById("infoText2").innerHTML = "It's a loose"; //display the loose message
  document.getElementById("infoText2").style.color = "#330000"; //display the loose message in red

  document.body.style.backgroundColor = "red"; //change the background color to red

  document.getElementById("userChoice").innerHTML = "=�"; //display the loose message
  document.getElementById("computerChoice").innerHTML = "=�"; //display the loose message

  document.getElementById("userScore").innerHTML = "You Loose!"; //display the loose message
  document.getElementById("computerScore").innerHTML = "You Loose!"; //display the loose message

  document.getElementById("computerInfo").style.display = "none"; //hide the computer score
  document.getElementById("userInfo").style.display = "none"; //hide the computer score

  setTimeout(() => {
    //set a timeout to reset the game
    reset(); //reset the game
  }, 3000); //reset the game after 3 seconds
}

function reset() {
  //function to reset the game
  userScore = 0; //reset the user score
  computerScore = 0; //reset the computer score

  document.getElementById("userScore").innerHTML = userScore; //display the user score
  document.getElementById("computerScore").innerHTML = computerScore; //display the computer score

  document.body.style.backgroundColor = "white"; //change the background color to white

  document.getElementById("userChoice").innerHTML = "�"; //display the clock emoji
  document.getElementById("computerChoice").innerHTML = "�"; //display the clock emoji

  document.getElementById("infoText").innerHTML = "Take your chance!"; //display the take your chance message
  document.getElementById("infoText").style.color = "black"; //display the take your chance message in black

  document.getElementById("infoText2").innerHTML = "Choose one!"; //display the choose one message
  document.getElementById("infoText2").style.color = "darkred"; //display the choose one message in dark red

  document.getElementById("computerInfo").style.display = "block"; //display the computer score
  document.getElementById("userInfo").style.display = "block"; //display the user score
}
