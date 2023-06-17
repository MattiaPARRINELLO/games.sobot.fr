const buttons = document.querySelectorAll('button'); //button elements

let heads = 1; //replace heads to 1
let tails = 0; //replace tails to 0
let userScore = 0; //set user score to 0
let computerScore = 0; //set computer score to 0

function displaySelections(user, computer){ //display selections function
    const playerSelection = document.querySelector('#player-selection'); //player selection element
    const computerSelection = document.querySelector('#computer-selection'); //computer selection element

    if (user === 'heads'){ //if the user take heads
        playerSelection.style.color = 'green'; //set the color to green
    }
    if (user === 'tails'){ //if the user take tails
        playerSelection.style.color = 'blue'; //set the color to blue
    }
    if (computer === 'heads'){ //if the computer take heads
        computerSelection.style.color = 'green'; //set the color to green
    }
    if (computer === 'tails'){ //if the computer take tails
        computerSelection.style.color = 'blue'; //set the color to blue
    }

    playerSelection.innerHTML = `${user}`; //display the user selection
    computerSelection.innerHTML = `${computer}` //display the computer selection
}

function displayRandom(random){ //display random function
    const displayResult = document.querySelector('#image'); //result element

        if (random === 1){ //if the random number is 1
            displayResult.style.backgroundImage =  "url('./heads.png')"; //display heads image
        } 
        else { //if the random number is not 1
            displayResult.style.backgroundImage =  "url('./tails.png')"; //display tails image
        }    
}

function tallyScore(random, userPick, computerPick){ //tally score function
    const playerDisplay = document.querySelector('#player-score'); //player score element
    const computerDisplay = document.querySelector('#computer-score'); //computer score element
    const winner = document.querySelector('#winner'); //winner element

    if (userPick === random){ //if the user pick the same as the random number
        userScore++; //increase the user score
    }
    if (computerPick === random){ //if the computer pick the same as the random number
        computerScore++; //increase the computer score
    }

    playerDisplay.textContent = `${userScore}`; //display the user score
    computerDisplay.textContent = `${computerScore}`; //display the computer score

    if (userScore === 5 && computerScore === 5){ //if the user score and computer score are equal to 5
        winner.innerHTML = `<h1>It's a Tie</h1>`; //display tie
    } else 
    if (userScore === 5){ //if the user score is equal to 5
        winner.innerHTML = `<h1>You Win!!!</h1>`; //display you win
    } else 
    if (computerScore === 5){ //if the computer score is equal to 5
        winner.innerHTML = `<h1>Computer Wins!!!</h1>`; //display computer win
    }
}
buttons.forEach(function(button){ //for each button
    button.addEventListener('click', function(e){ //when the button is clicked

        const random = Math.round(Math.random()); //random number
        const computerPick = Math.round(Math.random()); //computer pick

        let computerSelection; //computer selection

        if (computerPick === 1){ //if the computer pick is 1
            computerSelection = 'heads'; //set the computer selection to heads
        } 
        else { //if the computer pick is not 1
            computerSelection = 'tails' //set the computer selection to tails;
        }

        const spin = document.querySelector('#image'); //spin element
        spin.classList.add('animate'); //add animate class

        const userSelection = e.target.id; //user selection
        let userPick; //user pick

        if (userSelection === 'heads'){ //if the user selection is heads
            userPick = 1; //set the user pick to 1
        } else 
        if (userSelection === 'tails'){ //if the user selection is tails
            userPick = 0; //set the user pick to 0
        }

        displaySelections(userSelection, computerSelection); //display selections
        displayRandom(random); //display random
        
        setTimeout(function(){ //set timeout
            tallyScore(random, userPick, computerPick); //tally score
            document.querySelector('#image').classList.remove('animate'); //remove animate class
        }, 2000); //2 seconds
    })
})
