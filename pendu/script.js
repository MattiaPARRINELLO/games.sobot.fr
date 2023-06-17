const words = ["application", "programming", "interface", "wizard"]; // words array
const wrongLettersEl = document.getElementById("wrong-letters"); //wrong letters element
const word = document.getElementById("word"); //word element
const popup = document.getElementById("popup-container"); //popup element
const playAgainBtn = document.getElementById("play-button"); //play again button 
const notification = document.getElementById("notification-container"); //notification element
const finalMessage = document.getElementById("final-message"); //final message element
const figureParts = document.querySelectorAll(".figure-part"); //figure parts element

let selectedWord = words[Math.floor(Math.random() * words.length)]; //select a random word from the words array

const correctLetters = []; //correct letters array
const wrongLetters = []; //wrong letter array

function displayWord() { //display the word function
  word.innerHTML = `${selectedWord.split("").map(letter => `<span class="letter"> ${correctLetters.includes(letter) ? letter : ""} </span>`).join("")}` //display the word
  const innerWord = word.innerText.replace(/\n/g, ""); //remove the new line character
  if (innerWord === selectedWord) { //if the word is correct
    finalMessage.innerText = "Congratulations! You won!"; //display the final message
    popup.style.display = "flex"; //display the popup
  }
}

function updateWrongLettersEl() { //update the wrong letters element function

  wrongLettersEl.innerHTML = ` 
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}  
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}`;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) { //if the index is less than the errors
      part.style.display = "block"; //display the figure part
    } else { //if the index is greater than the errors
      part.style.display = "none"; //hide the figure part
    }

  });

  if (wrongLetters.length === figureParts.length) { //if the wrong letters is equal to the figure parts
    finalMessage.innerText = "Unfortunately you lost. ="; //display the final message
    popup.style.display = "flex"; //display the popup
  }
}

function showNotification() { //show the notification function
  notification.classList.add("show"); //add the show class to the notification element

  setTimeout(() => { //after 1 second
    notification.classList.remove("show"); //remove the show class from the notification element
  }, 2000); //end after 1 second
}
window.addEventListener("keydown", e => { //add an event listener to the window
  if (e.keyCode >= 65 && e.keyCode <= 90) { //if the key code is between 65 and 90
    const letter = e.key; //get the key
    
    if (selectedWord.includes(letter)) { //if the selected word includes the letter
      if (!correctLetters.includes(letter)) { //if the correct letters does not include the letter
        correctLetters.push(letter); //add the letter to the correct letters array
        displayWord(); //display the word
      } 
      else {
        showNotification(); //show the notification
      }
    } 
    else {
      if (!wrongLetters.includes(letter)) { //if the wrong letters does not include the letter
        wrongLetters.push(letter); //add the letter to the wrong letters array
        updateWrongLettersEl(); //update the wrong letters element
      } 
      else {
        showNotification(); //show the notification
      }
    }
  }
});
playAgainBtn.addEventListener("click", () => { //add an event listener to the play again button
  correctLetters.splice(0); //remove all the correct letters
  wrongLetters.splice(0); //remove all the wrong letters

  selectedWord = words[Math.floor(Math.random() * words.length)]; //select a random word from the words array

  displayWord(); //display the word
  updateWrongLettersEl(); //update the wrong letters element
  
  popup.style.display = "none"; //hide the popup
});
displayWord(); //display the word